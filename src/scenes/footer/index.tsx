import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Неперевершений тренажерний зал. Неперевершені заняття фітнесом.
            Світовий клас студій, щоб отримати тіло, про яке ви зараз мрієте..
            Отримайте своє тіло мрії прямо зараз.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Посилання</h4>
          <p className="my-5">Переваги</p>
          <p className="my-5">Наші класи</p>
          <p>Контакти</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Зв'яжіться з нами</h4>
          <p className="my-5">
            Вул. Чехова 27, Ірпінь, Київська область, Україна, 08200
          </p>
          <p>+38 (099) 383-6357</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
