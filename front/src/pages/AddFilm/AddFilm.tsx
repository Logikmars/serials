import React, { useRef, useState } from 'react';
import './AddFilm.scss';
import BigDarkGrayBtn from '../../components/BigDarkGrayBtn/BigDarkGrayBtn';
import filmStore from '../../stores/filmStore';

const AddFilm: React.FC = () => {
 const [form, setForm] = useState<{ name: string; value: any }[]>([
  { name: 'mediaFile', value: null },
  { name: 'previewUrl', value: null },
  { name: 'filmImage', value: null },
  { name: 'filmImagePreviewUrl', value: null },
  { name: 'filmName', value: '' },
  { name: 'filmDescription', value: '' },
  { name: 'tags', value: '' },
  { name: 'filmEpisodes', value: 0 },
  { name: 'filmEpisodesFree', value: 0 },
  { name: 'releaseAt', value: null },
  { name: 'liked', value: false },
  { name: 'isReleased', value: false },
  { name: 'isHot', value: false },
]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const getValue = (name: string) =>
    form.find(f => f.name === name)?.value;

  const setValue = (name: string, value: any) =>
    setForm(prev =>
      prev.map(f => (f.name === name ? { ...f, value } : f))
    );

  const handleFile = (file: File) => {
    if (file.type.startsWith('video/')) {
      setValue('mediaFile', file);
      setValue('previewUrl', URL.createObjectURL(file));
    }
  };

  const handleImageFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      setValue('filmImage', file);
      setValue('filmImagePreviewUrl', URL.createObjectURL(file));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    const newValue =
      type === 'checkbox'
        ? checked
        : name === 'filmEpisodes' || name === 'filmEpisodesFree'
        ? Number(value)
        : name === 'releaseAt'
        ? value ? new Date(value) : null
        : value;
    setValue(name, newValue);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) handleImageFile(file);
};

const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) handleImageFile(file);
};

const handleImageClick = () => imageInputRef.current?.click();

  const handleClick = () => fileInputRef.current?.click();

  const handleSubmit = () => {
    const result = Object.fromEntries(form.map(f => [f.name, f.value]));
    filmStore.sendDataToServer(result);
  };

  return (
    <div className="AddFilm container fcc gap_l">
      <div
        className="AddFilm_drop fcc brad_25 pa_l"
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        onClick={handleClick}
      >
        {getValue('previewUrl') ? (
          (getValue('mediaFile') as File)?.type.startsWith('image/') ? (
            <img src={getValue('previewUrl')} alt="preview" className="AddFilm_preview" />
          ) : (
            <video src={getValue('previewUrl')} controls className="AddFilm_preview" />
          )
        ) : (
          <p className="ff_s ffar">Drag and Drop or click(Video)</p>
        )}
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      <div
        className="AddFilm_drop fcc brad_25 pa_l"
        onDrop={handleImageDrop}
        onDragOver={e => e.preventDefault()}
        onClick={handleImageClick}
      >
        {getValue('filmImagePreviewUrl') ? (
          <img
            src={getValue('filmImagePreviewUrl')}
            alt="image preview"
            className="AddFilm_preview"
          />
        ) : (
          <p className="ff_s ffar">Drag and Drop or click(Preview(image))</p>
        )}
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          style={{ display: 'none' }}
          onChange={handleImageFileChange}
        />
      </div>
      {[{ name: 'filmName', placeholder: 'Film name' }, { name: 'filmDescription', placeholder: 'Film description' }, { name: 'tags', placeholder: 'Enter tags(separated by space)' }]
        .map(({ name, placeholder }) => (
          <div key={name} className={`AddFilm_${name} AddFilm_name fcc brad_25`}>
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              className="AddFilm_name_input brad_25 pa_l ffar fs_s"
              value={getValue(name)}
              onChange={handleChange}
            />
          </div>
        ))}

      {[{ name: 'filmEpisodes', placeholder: 'Enter episodes' }, { name: 'filmEpisodesFree', placeholder: 'Enter free episodes' }]
        .map(({ name, placeholder }) => (
          <div key={name} className={`AddFilm_${name} fcc brad_25`}>
            <input
              type="number"
              name={name}
              placeholder={placeholder}
              className="AddFilm_episodes_input brad_25 pa_l ffar fs_s"
              value={getValue(name) || ''}
              onChange={handleChange}
            />
          </div>
        ))}

      <div className="AddFilm_realese fcc brad_25">
        <input
          type="datetime-local"
          name="releaseAt"
          placeholder="Release date"
          className="AddFilm_realese_input brad_25 pa_l ffar fs_s"
          value={getValue('releaseAt') ? new Date(getValue('releaseAt')).toISOString().slice(0, 16) : ''}
          onChange={handleChange}
        />
      </div>

      <div className="AddFilm_additional fcc brad_25 gap_s">
        {[{ name: 'liked', label: 'You like it' }, { name: 'isReleased', label: 'Release' }, { name: 'isHot', label: 'Hot' }]
          .map(({ name, label }) => (
            <label key={name} className="ffar fs_s">
              <input
                type="checkbox"
                name={name}
                checked={getValue(name)}
                onChange={handleChange}
              />
              {label}
            </label>
          ))}
      </div>

      <div className="AddFilm_btn fcc">
        <BigDarkGrayBtn title="send" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddFilm;
