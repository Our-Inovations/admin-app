import jsPDF from 'jspdf';
import { Workbook } from 'exceljs';
import { memo, useMemo } from 'react';
import { Link, Card } from 'components';
import { ExportingEvent } from 'devextreme/ui/data_grid';
import { exportDataGrid as PDFDataExporter } from 'devextreme/pdf_exporter';
import { exportDataGrid as ExcelDataExporter } from 'devextreme/excel_exporter';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Selection,
  Pager,
  Paging,
  SearchPanel,
  Export,
} from 'devextreme-react/data-grid';
import { APP_URL } from 'config/environments';
import { Switch } from '@mui/material';

type Props<TList> = {
  columns: {
    name: string;
    title: string;
  }[];
  url?: string;
  delCol?: Boolean;
  content?: TList[];
  selection?: boolean;
  onSelection?: (list: TList[]) => void;
  customURL?: (item: string) => string;
  handleEdit?: any;
  setID?: any;
  buttonCol?: boolean;
};
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const ListComponent = <TList extends { id?: string }>({
  url,
  columns,
  content,
  selection,
  buttonCol,
  handleEdit,
  onSelection,
  delCol,
  customURL,
  setID,
}: Props<TList>) => {
  const viewColumn = useMemo(
    () => (
      <Column
        dataField="action"
        cellRender={({ data }: { data: any }): JSX.Element => {
          if (customURL && data.id)
            return <Link href={customURL(data.id)} text={`View Full Detail`} />;
          return <Link href={`${url}/${data.id}`} text={`View Full Detail`} />;
        }}
      />
    ),
    [customURL, url],
  );
  const delColumn = useMemo(
    () => (
      <Column
        dataField="delete"
        cellRender={({ data }: { data: any }): JSX.Element => {
          return (
            <p
              onClick={() => {
                setID(data.id);
              }}
            >
              ❌{' '}
            </p>
          );
        }}
      />
    ),
    [customURL, url],
  );
  const buttonColumn = useMemo(
    () => (
      <Column
        dataField="Paid / Unpaid"
        cellRender={({ data }: { data: any }): JSX.Element => {
          return (
            <Switch
              {...label}
              checked={data.fee}
              onChange={() => {
                handleEdit({ ...data, fee: !data.fee }, data?.id);
              }}
            />
          );
        }}
      />
    ),
    [customURL, url],
  );

  const onExporting = (ev: ExportingEvent<TList, any>) => {
    if (ev.format === 'pdf') {
      const doc = new jsPDF();
      PDFDataExporter({
        jsPDFDocument: doc,
        indent: 5,
        component: ev.component,
        customizeCell({ pdfCell, gridCell }) {
          if (gridCell && gridCell.column && pdfCell) {
            if (
              pdfCell.text &&
              gridCell.rowType === 'data' &&
              gridCell.column.dataField === 'Phone'
            ) {
              pdfCell.text = pdfCell.text.replace(
                /(\d{3})(\d{3})(\d{4})/,
                '($1) $2-$3',
              );
            } else if (gridCell.rowType === 'group') {
              pdfCell.backgroundColor = '#BEDFE6';
            } else if (pdfCell.font && gridCell.rowType === 'totalFooter') {
              pdfCell.font.style = 'italic';
            }
          }
        },
        customDrawCell(options) {
          const { gridCell, pdfCell, rect } = options;
          if (
            gridCell &&
            pdfCell &&
            gridCell.column &&
            gridCell.rowType === 'data' &&
            gridCell.column.dataField === 'action'
          ) {
            options.cancel = true;
            doc.setFontSize(11);
            doc.setTextColor('#0000FF');

            const link = customURL
              ? APP_URL + customURL(gridCell.data.id)
              : `${APP_URL + url}/${gridCell.data.id}`;

            if (pdfCell.padding && rect)
              doc.textWithLink(
                'link',
                rect.x + (pdfCell.padding.left ?? 0),
                rect.y + rect.h / 1.5,
                { url: link },
              );
          }
        },
      }).then(() => {
        doc.save('data.pdf');
      });
      return;
    }

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');

    ExcelDataExporter({
      component: ev.component,
      worksheet,
      autoFilterEnabled: true,
      customizeCell({ gridCell, excelCell }) {
        if (gridCell && gridCell.column && gridCell.rowType === 'data') {
          if (gridCell.column.dataField === 'Phone') {
            excelCell.value = parseInt(gridCell.value, 10);
            excelCell.numFmt = '[<=9999999]###-####;(###) ###-####';
          }
          if (gridCell.column.dataField === 'action') {
            const link = customURL
              ? APP_URL + customURL(gridCell.data.id)
              : `${APP_URL + url}/${gridCell.data.id}`;
            if (customURL) {
              excelCell.value = {
                text: 'Link',
                hyperlink: link,
              };
            } else excelCell.value = { text: 'Link', hyperlink: link };

            excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
            excelCell.alignment = { horizontal: 'left' };
          }
        }
      },
    }).then(() => {
      workbook.xlsx.writeBuffer().then(buffer => {
        const { saveAs } = require('file-saver');
        saveAs(
          new Blob([buffer], { type: 'application/octet-stream' }),
          'DataGrid.xlsx',
        );
      });
    });
    ev.cancel = true;
  };

  return (
    <Card>
      <DataGrid
        showBorders={true}
        dataSource={content}
        hoverStateEnabled={true}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        onExporting={onExporting}
        onSelectionChanged={({ selectedRowsData }) => {
          if (onSelection) onSelection(selectedRowsData);
        }}
      >
        <GroupPanel visible={true} />
        <SearchPanel visible={false} highlightCaseSensitive={false} />
        <Grouping autoExpandAll={false} />
        {selection && <Selection mode={'multiple'} allowSelectAll />}
        {columns.map((item, index) => (
          <Column key={index} dataField={item.name} dataType="string" />
        ))}
        {delCol ? delColumn : null}
        {buttonCol ? buttonColumn : null}
        {url || customURL ? viewColumn : null}
        <Pager
          allowedPageSizes={[10, 25, 50, 100]}
          showPageSizeSelector={true}
        />
        <Paging defaultPageSize={10} />
        <Export enabled={false} formats={['pdf', 'xlsx']} />
      </DataGrid>
    </Card>
  );
};

export const List = memo(ListComponent);
