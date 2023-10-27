import './App.css';
import { Link, NavLink } from 'react-router-dom';
import {useState} from 'react';
import oneUserInside from './image/svg/userUp/inside.svg';
import oneUserMiddle from './image/svg/userUp/middle.png';
import oneUserFace from './image/svg/userUp/user.png';
import twoUserInside from './image/svg/userDown/inside.svg';
import twoUserMiddle from './image/svg/userDown/middle.svg';
import twoUserFace from './image/svg/userDown/user.png';
import twoCardsCircleUp from './image/svg/circleOne.svg';
import oneCardsCircleUp from './image/svg/circleTwo.svg';
import oneCardsCircleDown from './image/svg/circleThree.svg';
import twoCardsMainUp from './image/1.png';
import twoCardsMainDown from './image/3.png';
import oneCardsMainUp from './image/2.png';
import logoImage from './image/svg/popup/locationmark.png';
import titleIconImage from './image/svg/popup/clock.png';
import linksTelegram from './image/svg/popup/telegram.png';
import linksVk from './image/svg/popup/vk.svg';
import linksYandex from './image/svg/popup/yandex.png';


function App() {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const nameLink = [
    {name: 'Преимущества', path: '/'},
    {name: 'Услуги', path: '/'},
    {name: 'Виджет', path: '/'},
    {name: 'Кому', path: '/'},
    {name: 'Тарифы', path: '/'},
    {name: 'Блог', path: '/'},
    {name: 'En', path: '/'},
  ] 
  const togglePopup = () => {
      setPopupVisibility(!isPopupVisible);
  };
  return (
    <div className='App'>      
      <div className='container'>
      <header className='header'>
        <div className="header__logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="38" viewBox="0 0 180 38" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.841599 0.836022C1.96242 -0.277464 3.79789 -0.277464 4.91871 0.836022L15.3899 11.2385C16.5106 12.3521 16.5106 14.1754 15.3899 15.2889C14.269 16.4024 12.4335 16.4024 11.3127 15.2889L0.841599 4.88641C-0.279231 3.77293 -0.279231 1.94951 0.841599 0.836022Z" fill="#506CCF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.1791 17.2982C18.2999 16.1847 20.1354 16.1847 21.2562 17.2982L21.5044 17.545C22.6254 18.6584 22.6254 20.4818 21.5044 21.5878C20.3836 22.7013 18.5482 22.7013 17.4273 21.5878L17.1791 21.3412C16.0583 20.2352 16.0583 18.4117 17.1791 17.2982Z" fill="#506CCF" fillOpacity="0.65"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M23.4076 23.6878C24.5285 22.5743 26.364 22.5743 27.4847 23.6878L35.9775 32.08C37.0984 33.1934 37.0984 35.0169 35.9775 36.1304C34.8567 37.2438 33.0213 37.2438 31.9004 36.1304L23.4076 27.7381C22.2793 26.6322 22.2869 24.8087 23.4076 23.6878Z" fill="#506CCF" fillOpacity="0.65"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.8176 0.835114C16.9383 -0.278371 18.7738 -0.278371 19.8946 0.835114L21.6774 2.60623C22.7983 3.71971 22.7983 5.54314 21.6774 6.65663C20.5567 7.77011 18.7211 7.77011 17.6004 6.65663L15.8176 4.88551C14.6967 3.77202 14.6967 1.9486 15.8176 0.835114Z" fill="#506CCF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M23.4076 8.02431C24.5285 6.91081 26.364 6.91081 27.4847 8.02431L35.9775 16.4165C37.0984 17.53 37.0984 19.3535 35.9775 20.4669C34.8567 21.5804 33.0213 21.5804 31.9004 20.4669L23.4076 12.0746C22.2793 10.9687 22.2869 9.14526 23.4076 8.02431Z" fill="#506CCF" fillOpacity="0.65"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M30.1177 0.835114C31.2386 -0.278371 33.074 -0.278371 34.1873 0.835114L35.9777 2.60623C37.0985 3.71971 37.0985 5.54314 35.9777 6.65663C34.8567 7.77011 33.0214 7.77011 31.9006 6.65663L30.1177 4.88551C28.9894 3.77202 28.9894 1.9486 30.1177 0.835114Z" fill="#506CCF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.33953 21.6775C7.46037 20.5639 9.29581 20.5639 10.4166 21.6775L20.8877 32.0874C22.0086 33.201 22.0086 35.0244 20.8877 36.1379C19.7669 37.2513 17.9315 37.2513 16.8106 36.1379L6.33953 25.7279C5.21869 24.6144 5.21869 22.791 6.33953 21.6775Z" fill="#506CCF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.840624 16.3865C1.96146 15.273 3.79691 15.273 4.91774 16.3865L5.16598 16.6331C6.28681 17.7466 6.28681 19.5701 5.16598 20.6836C4.04515 21.797 2.20969 21.797 1.08886 20.6836L0.840624 20.4369C-0.280208 19.316 -0.280208 17.5001 0.840624 16.3865Z" fill="#506CCF" fillOpacity="0.65"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.840624 30.3088C1.96146 29.1954 3.79691 29.1954 4.91774 30.3088L6.70054 32.0874C7.82137 33.201 7.82137 35.0244 6.70054 36.1378C5.5797 37.2513 3.74426 37.2513 2.62342 36.1378L0.840624 34.3592C-0.280208 33.2458 -0.280208 31.4223 0.840624 30.3088Z" fill="#506CCF"/>
          </svg>
        </div>
        <nav className='header__nav'>
          <ul className='header__nav_content'>
            {nameLink?.map(({name, path}) => (
              <Link to={path} key={name}>
                <li className='content__link'>
                  {name}
                </li>
              </Link>
            ))}            
          </ul>
        </nav>
        <div className='header__contacts'>
          <span className='header__contacts_tel'>+7 (495) 123-45-67</span>
          <button className='header__contacts_button' onClick={togglePopup}>Контакты</button>
        </div>
      </header>
      <div className='body'>
        <div className='body__text'>
          <h1 className='body__text_title'>
            Техническая поддержка сайтов, CRM систем и мобильных приложений
          </h1>
          <p className='body__text_content'>Профессиональное техническое сопровождение и обслуживание сайтов: полный комплекс услуг от опытных экспертов</p>
          <button className='body__text_button'>Подключиться</button>
        </div>
        <div className='body__pictures'>
          <div className='body__pictures_twoCards'>
            <div className='twoCards__circleUp'>
              <img className='twoCards__circleUp_image' src={twoCardsCircleUp} alt="картинка кружка"/>
            </div>
            <div className='twoCards__mainUp'>
              <img className='twoCards__mainUp_image' src={twoCardsMainUp} alt="картинка аналитического блока"/>
            </div>
            <div className='twoCards__mainDown'>
              <img className='twoCards__mainDown_image' src={twoCardsMainDown} alt="картинка блока запросов"/>
            </div>
            <div className='twoCards__user'>
              <div className='body__pictures_userTwo'>
                <div className='user_image_insideTwo'>
                  <img className='inside__imageTwo' src={twoUserInside} alt="картинка круга"/>
                </div>
                <div className='user_image_middleTwo'>
                  <img className='middle__imageTwo' src={twoUserMiddle} alt="картинка обводки"/>
                </div>
                <div className='user_image_outsideTwo'>
                  <img className='outside__imageTwo' src={twoUserFace} alt="картинка лица"/>
                </div>
              </div>   
            </div>                
            <div className='twoCards__kub'></div>               
          </div>
          <div className='body__pictures_oneCard'>
            <div className='oneCards__mainUp'>
              <img className='oneCards__mainUp_image' src={oneCardsMainUp} alt="картинка списка задач"/>
            </div>
            <div className='oneCards__user'>
              <div className='body__pictures_user'>
                <div className='user_image_inside'>
                  <img className='inside__image' src={oneUserInside} alt="картинка круга"/>
                </div>
                <div className='user_image_middle'>
                  <img className='middle__image' src={oneUserMiddle} alt="картинка обводки"/>
                </div>
                <div className='user_image_outside'>
                  <img className='outside__image' src={oneUserFace} alt="картинка лица"/>
                </div>
              </div>  
            </div>              
            <div className='oneCards__circleUp'>
              <img className='oneCards__circleUp_image' src={oneCardsCircleUp} alt="картинка кружка"/>
            </div>
            <div className='oneCards__circleDown'>
              <img className='oneCards__circleDown_image' src={oneCardsCircleDown} alt="картинка кружка"/>
            </div>
          </div>     
        </div>
      </div>
      <footer className='footer'>
          <button className='footer__button'>
            <svg className='footer__button_svg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16.2653 8 16.5196 8.10536 16.7072 8.29289C16.8947 8.48043 17 8.73478 17 9V20.586L21.292 16.292C21.385 16.199 21.4954 16.1253 21.6169 16.075C21.7384 16.0246 21.8686 15.9987 22 15.9987C22.1315 15.9987 22.2617 16.0246 22.3832 16.075C22.5047 16.1253 22.6151 16.199 22.708 16.292C22.801 16.385 22.8748 16.4954 22.9251 16.6168C22.9754 16.7383 23.0013 16.8685 23.0013 17C23.0013 17.1315 22.9754 17.2617 22.9251 17.3832C22.8748 17.5046 22.801 17.615 22.708 17.708L16.708 23.708C16.6152 23.8011 16.5048 23.875 16.3833 23.9254C16.2618 23.9758 16.1316 24.0018 16 24.0018C15.8685 24.0018 15.7383 23.9758 15.6168 23.9254C15.4953 23.875 15.3849 23.8011 15.292 23.708L9.29204 17.708C9.19907 17.615 9.12531 17.5046 9.075 17.3832C9.02468 17.2617 8.99878 17.1315 8.99878 17C8.99878 16.8685 9.02468 16.7383 9.075 16.6168C9.12531 16.4954 9.19907 16.385 9.29204 16.292C9.47982 16.1042 9.73449 15.9987 10 15.9987C10.1315 15.9987 10.2617 16.0246 10.3832 16.075C10.5047 16.1253 10.6151 16.199 10.708 16.292L15 20.586V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4805 8.10536 15.7348 8 16 8Z" fill="#5F6B77"/>
            </svg>
          </button>
      </footer>
      </div>      
      <div className={`${isPopupVisible ? "active" : ""} popup`}>
        <h3 className='pupup__title'>Контактная информация</h3>
        <div className='popup__map'>
          <div className='popup__location'>
            <div className='popup__location_logo'>
              <img className='logo__image' src={logoImage} alt="иконка навигации"/>
            </div>
            <h4 className='popup__location_title'>Наш офис</h4>
          </div>
          <p className='popup__text'>Санкт-Петербург, ул. Такая-то, д. 1</p>
          <NavLink className='popup__link' to='/'>Показать на карте</NavLink>
        </div>
        <div className='popup__call'>
          <div className='popup__call_contacts'>
            <p className='contacts__tel'> Звоните:
              <span className='contacts__tel_bold'>+7 (495) 123-45-67</span>
            </p>
            <p className='contacts__write'> Пишите:
              <Link className='contacts__write_bold' to='/'>info@test.ru</Link>
            </p>
          </div>
          <button className='popup__call_button'>Заказать звонок</button>
        </div>
        <div className='popup__chart'>
          <div className='popup__chart_title'>
            <div className='title__icon'>
              <img className='title__icon_image' src={titleIconImage} alt="иконка часов"/>
            </div>
            <h4 className='title__icon_text'>Режим работы:</h4>
          </div>
          <p className='popup__chart_number'>Пн-Пт — с 10:00 до 18:00</p>
          <p className='popup__chart_text'>Сб-Вс — выходной</p>
        </div>
        <div className='popup__social'>
          <h4 className='popup__social_title'>Мы в соцсетях</h4>
          <div className='popup__social_links'>
            <Link to='/'>
              <div className='links__telegram'>
                <img className='links__telegram_image' src={linksTelegram} alt="иконка телеграмма"/>
              </div>
            </Link>
            <Link to='/'>
              <div className='links__vk'>
                <img className='links__vk_image' src={linksVk} alt="иконка vk"/>
              </div>
            </Link>
            <Link to='/'>
              <div className='links__yandex'>
                <img className='links__yandex_image' src={linksYandex} alt="иконка yandex dzen"/>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isPopupVisible && ( <div className='darkContainer' onClick={togglePopup}></div>)}                    
    </div>   
  );
}

export default App;
