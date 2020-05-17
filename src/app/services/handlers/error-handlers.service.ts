import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppErrorHandler extends ErrorHandler{
    constructor() {
        super();
    }

    handleError(error: Error | HttpErrorResponse): void {
        let displayMessage: string = "";
        if (!environment.production) {
            displayMessage+= " See console for details...";
        }
        super.handleError(error);
    }
}