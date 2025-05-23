import { memo, Suspense } from 'react';

import { RoutesProvider } from '@/app/providers/RoutesProvider';
import { useThemes } from '@/app/providers/ThemesProvider';
import { ConverterLink } from '@/entities/converterLink';
import { CreditorsLink } from '@/entities/creditorsLink';
import { RatesLink } from '@/entities/ratesLink';
import { ScoringLink } from '@/entities/scoringLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

const App = memo(() => {
  const { theme } = useThemes();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <nav className='navbar'>
          <div className='navbar-inner'>
            <div className='navbar-links'>
              <ScoringLink />
              <CreditorsLink />
              <ConverterLink />
              <RatesLink />
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
