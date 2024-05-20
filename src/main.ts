import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PresentationModule } from './app/presentation/presentation.module';

platformBrowserDynamic()
    .bootstrapModule(PresentationModule)
    .catch(err => console.error(err));

