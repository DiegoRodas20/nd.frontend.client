import { trigger, transition, style, animate, keyframes, animation, query, stagger } from "@angular/animations";

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
    ]),
]);

export const slideInOut = trigger('slideInOut', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
    transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 })),
    ]),
]);

export const beautifulSlideInOut = trigger('beautifulSlideInOut', [
    transition(':enter', [
        style({
            transform: 'translateX(100%) rotate(15deg)',
            opacity: 0,
        }),
        animate(
            '500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ transform: 'translateX(0) rotate(0deg)', opacity: 1 })
        ),
    ]),
    transition(':leave', [
        animate(
            '500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ transform: 'translateX(100%) rotate(15deg)', opacity: 0 })
        ),
    ]),
]);

export const scaleFade = trigger('scaleFade', [
    transition(
        ':enter',
        animation([
            style({ opacity: 0, transform: 'scale(0.8, 0.8)' }),
            animate(
                '0.3s ease-in-out',
                style({ opacity: 1, transform: 'scale(1, 1)' })
            ),
        ])
    ),
    transition(
        ':leave',
        animation([
            animate(
                '0.3s ease-in-out',
                style({
                    opacity: 0,
                    transform: 'scale(0.8, 0.8)',
                })
            ),
        ])
    ),
]);

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

export const slideFadeLeft = trigger('slideFadeLeft', [
    transition(
        ':enter',
        animation([
            style({ opacity: 0, height: 0, transform: 'translate(100px, 0)' }),
            animate(
                '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
                style({ opacity: 1, height: '*', transform: 'translate(0, 0)' })
            ),
        ])
    ),
    transition(
        ':leave',
        animation([
            animate(
                '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
                style({ opacity: 0, height: 0, transform: 'translate(100px, 0)' })
            ),
        ])
    ),
]);