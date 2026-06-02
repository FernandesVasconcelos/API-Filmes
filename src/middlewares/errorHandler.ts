// ============================================================
// 🎯 TAREFA: Crie o middleware de erro aqui!
// ============================================================
//
// 1. Importar AppError e ValidationError de "../errors"
// 2. Criar função errorHandler com 4 parâmetros (err, req, res, next)
// 3. Se err instanceof ValidationError → 400 + erros[]
// 4. Se err instanceof AppError → err.statusCode + mensagem
// 5. Senão → console.error + 500
// 6. Exportar a função
//
// ============================================================


// Escreva seu código aqui:

import { Request, Response, NextFunction } from "express";
import { AppError, ValidationError } from "../errors";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ValidationError) {
        return res.status(400).json({ sucesso: false, erros: err.erros });
    }
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ sucesso: false, mensagem: err.message });
    }
    console.error(err);
    res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
}