import {
    trigger,
    transition,
    style,
    stagger,
    animate,
    query,
} from '@angular/animations';

export const scaleFadeStagger = trigger('scaleFadeStagger', [
    transition(':enter', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'scale(0.8, 0.8)' }),
                stagger('50ms', [
                    animate(
                        '300ms 300ms',
                        style({ opacity: 1, transform: 'scale(1, 1)' })
                    ),
                ]),
            ],
            { optional: true }
        ),
    ]),
    // transition(':leave', [
    //     query(
    //         ':leave',
    //         [
    //             stagger('50ms', [
    //                 animate('300ms', style({ opacity: 0, transform: 'scale(0.8, 0.8)' })),
    //             ]),
    //         ],
    //         { optional: true }
    //     ),
    // ]),
]);
