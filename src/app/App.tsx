import { memo, Suspense } from 'react';

import { useSelector } from 'react-redux';

import { getIsAuth } from '@/app/model/selectors/getAppSelectors';
import { RoutesProvider } from '@/app/providers/RoutesProvider';
import { useThemes } from '@/app/providers/ThemesProvider';
import { ConverterLink } from '@/entities/links/converterLink';
import { CreditorsLink } from '@/entities/links/creditorsLink';
import { LoginLink } from '@/entities/links/loginLink';
import { RatesLink } from '@/entities/links/ratesLink';
import { ScoringLink } from '@/entities/links/scoringLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

const App = memo(() => {
  const { theme } = useThemes();

  const isAuth = useSelector(getIsAuth);

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <nav className='navbar'>
          <div className='navbar-inner'>
            <div className='navbar-links'>
              {!isAuth && <LoginLink />}

              {isAuth && (
                <>
                  <ScoringLink />
                  <CreditorsLink />
                  <ConverterLink />
                  <RatesLink />
                </>
              )}
            </div>
            <div>
              <LangSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </nav>

        <div className='container'>
          <RoutesProvider />
        </div>
      </Suspense>
    </div>
  );
});

export default App;
