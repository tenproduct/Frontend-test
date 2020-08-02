import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate('400ms linear', style({ opacity: 1 }))
    ])
]);
