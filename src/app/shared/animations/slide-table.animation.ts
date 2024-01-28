import {
    animate,
    query,
    stagger,
    style,
    transition,
    trigger
} from '@angular/animations';

export const slideTable = trigger('slideTable', [
    transition(':enter', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'scale(1, 0.8)' }),
                stagger('50ms', [
                    animate('300ms 300ms', style({ opacity: 1, transform: 'scale(1, 1)' })),
                ]),
            ],
            { optional: true }
        ),
    ]),
]);