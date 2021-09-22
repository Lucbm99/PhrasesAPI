import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';

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

export const listPhrases = async (request: Request, response: Response) => {

    let list = await Phrase.findAll();

    response.json({ list });
}


export const getPhraseById = async (request: Request, response: Response) => { 
    let { id } = request.params;

    let phrase = await Phrase.findByPk(id);
    if(phrase) {
        response.json({phrase});
    } else {
        response.json({ error: "Frase não encontrada"});
    }

}

export const updatePhrase = async (request: Request, response: Response) => { 
    let { id } = request.params;
    let { author, txt } = request.body;


    let phrase = await Phrase.findByPk(id);

    if(phrase) {
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();

        response.json({ phrase });

    } else {
        response.json({ error: "Frase não encontrada"});
    }

}
export const deletePhrase = async (request: Request, response: Response) => { 
    let { id } = request.params;

    await Phrase.destroy({ where: { id } });
    
    response.json({});
}

export const randomPhrase = async (request: Request, response: Response) => { 
    let phrase = await Phrase.findOne({
        order: [
            Sequelize.fn('RAND')
        ]
    });

    if(phrase) {
        response.json({ phrase });
    } else {
        response.json({ error: 'Não há frases cadastradas.'});
    }
}
