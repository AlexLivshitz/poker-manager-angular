import { Injectable } from '@angular/core';
import { Game } from "../models/game";
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

const BASE_URL = 'http://localhost:8085/games';
const HEADER   = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class GamesService {
	constructor(private http: Http) {
	}

	getGames(): Observable<Response> {
		return this.http.get(BASE_URL);
	}

	addGame(game: Game): Observable<Response> {
		return this.http.post(BASE_URL, JSON.stringify(game), HEADER);
	}

	deleteGame(game: Game): Observable<Response> {
		return this.http.delete(`${BASE_URL}/${game.id}`);
	}

	updateGame(game: Game): Observable<Response> {
		return this.http.put(BASE_URL, JSON.stringify(game), HEADER)
	}
}