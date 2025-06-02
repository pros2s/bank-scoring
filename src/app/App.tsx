import { memo, Suspense } from 'react';

import { useAuth } from '@/app/providers/AuthProvider';
import { RoutesProvider } from '@/app/providers/RoutesProvider';
import { useThemes } from '@/app/providers/ThemesProvider';
import { ConverterLink } from '@/entities/links/converterLink';
import { CreditorsLink } from '@/entities/links/creditorsLink';
import { LoginLink } from '@/entities/links/loginLink';
import { RatesLink } from '@/entities/links/ratesLink';
import { ScoringLink } from '@/entities/links/scoringLink';
import { SignOut } from '@/entities/signOut';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FlexBox } from '@/shared/ui/FlexBox';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

const App = memo(() => {
  const { theme } = useThemes();
  const { isAuth } = useAuth();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <nav className='navbar'>
          <div className='navbar-inner'>
            <div className='navbar-links'>
              <ScoringLink />

              {isAuth && (
                <>
                  <CreditorsLink />
                  <ConverterLink />
                  <RatesLink />
                </>
              )}
            </div>
            <FlexBox align='center' gap={10}>
              <LangSwitcher />
              <ThemeSwitcher />
              {isAuth && <SignOut />}
              {!isAuth && <LoginLink />}
            </FlexBox>
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
