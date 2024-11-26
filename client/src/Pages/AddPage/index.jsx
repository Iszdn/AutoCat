import React, { useState } from 'react';
import './index.scss';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    volunteerOrganization: '',
    university: '',
    jobPlace: '',
    jobField: '',
  });

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Təsdiqlənmiş Məlumatlar:', { category, ...formData });
    alert('Form uğurla göndərildi!');
    setFormData({
      name: '',
      surname: '',
      email: '',
      password: '',
      volunteerOrganization: '',
      university: '',
      jobPlace: '',
      jobField: '',
    }); // Form sahələrini sıfırlayın
    setCategory(''); // Kategoriyanı sıfırlayın
    navigate('/'); // Home səhifəsinə yönləndirin
  };

  const handleResetCategory = () => {
    setCategory('');
  };

  return (
    <>
      <Helmet>
        <title>Qeydiyyat</title>
      </Helmet>
      <div className="sign-up-cont">
        <div className="signup-container">
          <h1>Qeydiyyat</h1>
          {!category ? (
            <div className="category-select">
              <label>Kategoriyanı Seçin:</label>
              <select value={category} onChange={handleCategoryChange}>
                <option value="">Zəhmət olmasa seçin</option>
                <option value="volunteer">Könüllü</option>
                <option value="student">Tələbə</option>
                <option value="employee">İşçi</option>
              </select>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                {category === 'volunteer' && (
                  <>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ad"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Soyad"
                      value={formData.surname}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="volunteerOrganization"
                      placeholder="Könüllü təşkilat"
                      value={formData.volunteerOrganization}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Şifrə"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </>
                )}

                {category === 'student' && (
                  <>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ad"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Soyad"
                      value={formData.surname}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="university"
                      placeholder="Universitet"
                      value={formData.university}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Şifrə"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </>
                )}

                {category === 'employee' && (
                  <>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ad"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Soyad"
                      value={formData.surname}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="jobPlace"
                      placeholder="İş yeri"
                      value={formData.jobPlace}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="jobField"
                      placeholder="İxtisas sahəsi"
                      value={formData.jobField}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Şifrə"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </>
                )}

                <button type="submit" className="submit-btn">
                  Göndər
                </button>
              </form>
              <button onClick={handleResetCategory} className="reset-btn">
                Geri dön
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignupPage;
