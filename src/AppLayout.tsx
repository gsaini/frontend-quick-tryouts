import { Link, Outlet } from 'react-router';
import Header from './components/Header';
import { useTranslation } from 'react-i18next';

function AppLayout() {
  const {t} = useTranslation();

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <aside className="sidebar">
          <div className="sidebar-links">
            <div className="sidebar-link">
              <Link to="/charts" className='main-link'>{t('charts')}</Link>
            </div>
            <div className="sidebar-link">
              <Link to="/greetings" className='main-link'>{t('greetings')}</Link>
            </div>
          </div>
        </aside>
        <Outlet />
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
}
export default AppLayout;