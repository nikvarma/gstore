import { Params } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParamas: Params;
}