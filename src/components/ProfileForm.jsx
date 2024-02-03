import { useState } from 'react';
import AvatarInput from './AvatarInput';

function ProfileForm({ users }) {
  const [values, setValues] = useState({
    nickname: users[0].nickname,
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ProfileForm" onSubmit={handleSubmit}>
      <AvatarInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input name="email" placeholder={users[0].email} />
      <input
        name="nickName"
        value={values.nickname}
        onChange={handleInputChange}
      />
      <button type="submit">저장</button>
    </form>
  );
}

export default ProfileForm;
