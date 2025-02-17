import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    const server = this.serversService.getServer(+route.params['id']);
    return server ?? { id: 0, name: 'Unknown', status: 'Offline' }; // Default fallback server
  }
}
