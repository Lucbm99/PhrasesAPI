import { Request, Response } from 'express';

import { Phrase } from '../models/Phrase';

export const ping = (request: Request, response: Response) => {
    response.json({pong: true});
}

export const random =  (request: Request, response: Response) => {

    let nRand: number = Math.floor( Math.random() * 10);

    response.json({number: nRand});

}

export const nome = (request: Request, response: Response) => {
    let nome: string = request.params.nome;
    response.json({nome: `Você enviou o nome ${nome}`});
}

export const createPhrase = async (request: Request, response: Response) => {
    let {author, txt} = request.body;

    let newPhrase = await Phrase.create({ author, txt })

    response.json({id: newPhrase.id, author, txt});
}