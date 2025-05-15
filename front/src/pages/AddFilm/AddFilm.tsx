import React, { useEffect, useRef, useState } from 'react';
import './AddFilm.scss';
import BigDarkGrayBtn from '../../components/BigDarkGrayBtn/BigDarkGrayBtn';
import filmStore from '../../stores/filmStore';

interface AddFilmProps {
  filmToEdit?: any;
  onClose?: () => void;
  onSave?: () => void;
  onDelete?: () => void;
}

const AddFilm: React.FC<AddFilmProps> = ({ filmToEdit, onClose, onSave, onDelete }) => {
  const [form, setForm] = useState({
    filmName: '',
    filmDescription: '',
    tags: '',
    filmEpisodes: 0,
    filmEpisodesFree: 0,
    releaseAt: null as Date | null,
    liked: false,
    isHot: false,
    mediaFile: null as File | null,
    mediaPreview: '', // видео-превью (URL)
    filmImage: null as File | null,
    imagePreview: '', // изображение-превью (URL)
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Инициализация формы при редактировании
  useEffect(() => {
    if (filmToEdit) {
      setForm({
        filmName: filmToEdit.name || '',
        filmDescription: filmToEdit.description || '',
        tags: filmToEdit.tags || '',
        filmEpisodes: filmToEdit.filmEpisodes || 0,
        filmEpisodesFree: filmToEdit.filmEpisodesFree || 0,
        releaseAt: filmToEdit.releaseIn ? new Date(filmToEdit.releaseIn) : null,
        liked: filmToEdit.liked || false,
        isHot: filmToEdit.isHot || false,
        mediaFile: null, // Файл пока не меняется, он только для загрузки нового
        mediaPreview: filmToEdit.mediaFilePath ? `http://localhost:5000${filmToEdit.mediaFilePath}` : '',
        filmImage: null,
        imagePreview: filmToEdit.filmImage ? `http://localhost:5000${filmToEdit.filmImage}` : '',
      });
    }
  }, [filmToEdit]);

  // Универсальный setter для текста, чисел, чекбоксов
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    let newValue: any;

    if (type === 'checkbox') newValue = checked;
    else if (type === 'number') newValue = Number(value);
    else if (name === 'releaseAt') newValue = value ? new Date(value) : null;
    else newValue = value;

    setForm(prev => ({ ...prev, [name]: newValue }));
  };

  // Обработка загрузки видео
  const handleVideoFile = (file: File) => {
    if (file.type.startsWith('video/')) {
      setForm(prev => ({
        ...prev,
        mediaFile: file,
        mediaPreview: URL.createObjectURL(file),
      }));
    }
  };

  // Обработка загрузки картинки (превью)
  const handleImageFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      setForm(prev => ({
        ...prev,
        filmImage: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  // Обработка drag & drop для видео
  const handleDropVideo = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleVideoFile(file);
  };

  // Обработка drag & drop для картинки
  const handleDropImage = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleImageFile(file);
  };

  const handleSubmit = async () => {
const formData = new FormData();
formData.append('filmName', form.filmName);
formData.append('filmDescription', form.filmDescription);
formData.append('tags', form.tags);
formData.append('filmEpisodes', form.filmEpisodes.toString());
formData.append('filmEpisodesFree', form.filmEpisodesFree.toString());

if (form.releaseAt) {
  formData.append('releaseAt', form.releaseAt.toISOString());
}

formData.append('liked', form.liked.toString());
formData.append('isHot', form.isHot.toString());

if (form.mediaFile instanceof File) {
  formData.append('mediaFile', form.mediaFile);
}

if (form.filmImage instanceof File) {
  formData.append('filmImage', form.filmImage);
}

if (filmToEdit) {
  await filmStore.updateFilm(filmToEdit._id, formData);
} else {
  await filmStore.sendDataToServer(formData);
}

onSave?.();
onClose?.();
onDelete?.();
};


  return (
    <div className="AddFilm container fcc gap_l">
      {/* VIDEO UPLOAD */}
      <div
        className="AddFilm_drop fcc brad_25 pa_l"
        onDrop={handleDropVideo}
        onDragOver={e => e.preventDefault()}
        onClick={() => fileInputRef.current?.click()}
      >
        {form.mediaPreview ? (
          <video src={form.mediaPreview} controls className="AddFilm_preview" />
        ) : (
          <p className="ff_s ffar">Drag and Drop or click (Video)</p>
        )}
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) handleVideoFile(file);
          }}
        />
      </div>

      {/* IMAGE UPLOAD */}
      <div
        className="AddFilm_drop fcc brad_25 pa_l"
        onDrop={handleDropImage}
        onDragOver={e => e.preventDefault()}
        onClick={() => imageInputRef.current?.click()}
      >
        {form.imagePreview ? (
          <img src={form.imagePreview} alt="Preview" className="AddFilm_preview" />
        ) : (
          <p className="ff_s ffar">Drag and Drop or click (Preview image)</p>
        )}
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          style={{ display: 'none' }}
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) handleImageFile(file);
          }}
        />
      </div>

      {/* TEXT INPUTS */}
      {[
        { name: 'filmName', placeholder: 'Film name' },
        { name: 'filmDescription', placeholder: 'Film description' },
        { name: 'tags', placeholder: 'Enter tags (separated by space)' },
      ].map(({ name, placeholder }) => (
        <div key={name} className="AddFilm_name fcc brad_25">
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            className="AddFilm_name_input brad_25 pa_l ffar fs_s"
            value={form[name as keyof typeof form] as string}
            onChange={handleChange}
          />
        </div>
      ))}

      {/* NUMBER INPUTS */}
      {[
        { name: 'filmEpisodes', placeholder: 'Enter episodes' },
        { name: 'filmEpisodesFree', placeholder: 'Enter free episodes' },
      ].map(({ name, placeholder }) => (
        <div key={name} className="AddFilm_name fcc brad_25">
          <input
            type="number"
            name={name}
            placeholder={placeholder}
            className="AddFilm_episodes_input brad_25 pa_l ffar fs_s"
            value={form[name as keyof typeof form] as number}
            onChange={handleChange}
          />
        </div>
      ))}

      {/* RELEASE DATE */}
      <div className="AddFilm_realese fcc brad_25">
        <input
          type="datetime-local"
          name="releaseAt"
          className="AddFilm_realese_input brad_25 pa_l ffar fs_s"
          value={
            form.releaseAt
              ? form.releaseAt.toISOString().slice(0, 16)
              : ''
          }
          onChange={handleChange}
        />
      </div>

      {/* CHECKBOXES */}
      <div className="AddFilm_additional fcc brad_25 gap_s">
        {[
          { name: 'liked', label: 'You like it' },
          { name: 'isHot', label: 'Hot' },
        ].map(({ name, label }) => (
          <label key={name} className="ffar fs_s">
            <input
              type="checkbox"
              name={name}
              checked={form[name as keyof typeof form] as boolean}
              onChange={handleChange}
            />
            {label}
          </label>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="AddFilm_btn fcc gap_s">
        <BigDarkGrayBtn title={filmToEdit ? 'Update' : 'Send'} onClick={handleSubmit} />
        {onClose &&<> <BigDarkGrayBtn title="Close" onClick={onClose} />  {onDelete && <BigDarkGrayBtn title="Delete" onClick={onDelete} />}</>}
      </div>
    </div>
  );
};

export default AddFilm;
