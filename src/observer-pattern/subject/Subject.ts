import { Observer } from '../observer/Observer'
export interface Subject {
    registerObserver(o:Observer);
    removeObserver(o:Observer);
    notifyObservers();
}