import { useRef, useState, useEffect } from 'react';
import './AvatarInput.css';
import plusImg from '../assets/plus.svg';

function AvatarInput({ className = '', name, value, onChange }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value); // 문자열 리턴, 해당 파일의 주소처럼 쓸 수 있음
    setPreview(nextPreview);

    return () => {
      // 정리 함수
      setPreview();
      URL.revokeObjectURL(nextPreview);
    }; // 사이드 이펙트 정리  ObjectURL 해제
  }, [value]); // 파일을 선택할 때 마다 미리보기 주소를 변경함

  // const handleClearClick = () => {
  //   const inputNode = inputRef.current;
  //   if (!inputNode) return;
  //   inputNode.value = '';
  //   onChange(name, null);
  // };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={`AvatarInput ${className}`}>
      {value && (
        <img
          src={preview}
          alt="이미지 미리보기"
          className={`AvatarInput-preview ${preview ? 'selected' : ''}`}
        />
      )}

      <button
        htmlFor="imgFile"
        onClick={handleUploadClick}
        className="AvatarInput-upload-button"
      >
        <img src={plusImg} alt="이미지 업로드" />
      </button>
      <input
        id="imgFile"
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
        className="AvatarInput-hidden"
      />
      {/* {value && (
        <button onClick={handleClearClick} className="AvatarInput-clear-button">
          X
        </button>
      )} */}
    </div>
  );
}

export default AvatarInput;
