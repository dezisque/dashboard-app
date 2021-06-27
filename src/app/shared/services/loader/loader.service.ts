import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading = false;
  constructor() {}
  public setLoader(): void {
    this.isLoading = true;
  }
  public unsetLoader(): void {
    this.isLoading = false;
  }
  public getLoader(): boolean {
    return this.isLoading;
  }
}
