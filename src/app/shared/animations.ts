import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1 }))
    ])
]);
