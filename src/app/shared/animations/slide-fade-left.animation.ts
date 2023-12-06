import {
    animate,
    animation,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const slideFadeLeft = trigger('slideFadeLeft', [
    transition(':leave',
        animation([
            animate(
                '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
                style({ opacity: 0, height: 0, transform: 'translate(100px, 0)' })
            ),
        ])
    ),
]);