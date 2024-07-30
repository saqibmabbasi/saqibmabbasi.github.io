import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { provideClientHydration } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
//import { NbThemeModule } from '@nebular/theme';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)
        // , provideClientHydration()
        , provideHttpClient()
        , provideAnimations(), provideAnimationsAsync()
        //, NbThemeModule.forRoot()
        ,{ provide: LocationStrategy, useClass: PathLocationStrategy }
    ]
};
