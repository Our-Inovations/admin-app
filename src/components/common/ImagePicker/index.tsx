import { useDropzone } from 'react-dropzone';
import { memo, useState, useEffect } from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import {
  ImagePickerContainer,
  ClosedIcon,
  DropZoneContainer,
  MediaContainer,
  DropzoneSectionHeading,
} from './styled';
import { useToast } from 'hooks/useToast';

type Props = {
  limit: number;
  getFiles: (files: File[]) => void;
};

const ImagepickerComponent = ({ limit, getFiles }: Props) => {
  const { Toast, handleClick } = useToast();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [show, setShow] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  const deleteImage = (index: number) => {
    const updatedFiles = files.filter((item, idx) => index !== idx);
    setFiles(updatedFiles);
  };

  useEffect(() => {
    function toggleShow() {
      if (acceptedFiles.length) {
        if (acceptedFiles.length > limit) {
          handleClick({
            level: 'error',
            message: `Cannot add more than ${limit} image${
              limit > 1 ? 's' : ''
            }`,
          });
        } else {
          setFiles(acceptedFiles);
          getFiles(acceptedFiles);
          setShow(true);
        }
      }
    }

    toggleShow();

    return () => {};
  }, [acceptedFiles]);

  return (
    <ImagePickerContainer>
      <DropZoneContainer>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>{'DRAG AND DROP FILES OR CLICK TO SELECT FILES'}</p>
        </div>
      </DropZoneContainer>
      <aside>
        {!files.length ? (
          <></>
        ) : show ? (
          <>
            <DropzoneSectionHeading>Files</DropzoneSectionHeading>
            <MediaContainer maxWidth="sm">
              {files.map((item, index) => (
                <Card key={index} style={{ width: '6rem' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={URL.createObjectURL(item)}
                      alt="green iguana"
                    />
                    <span onClick={() => deleteImage(index)}>
                      <ClosedIcon />
                    </span>
                  </CardActionArea>
                </Card>
              ))}
            </MediaContainer>
          </>
        ) : null}
      </aside>
      <Toast />
    </ImagePickerContainer>
  );
};

export const ImagePicker = memo(ImagepickerComponent);
