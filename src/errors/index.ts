// ============================================================
// 🎯 TAREFA: Crie 3 classes de erro aqui!
// ============================================================
//
// 1. AppError extends Error
//    - constructor(statusCode: number, message: string)
//    - super(message), this.name = "AppError"
//
// 2. NotFoundError extends AppError
//    - constructor(recurso: string)
//    - super(404, `${recurso} não encontrado`)
//
// 3. ValidationError extends AppError
//    - constructor(erros: string[])
//    - super(400, "Dados inválidos")
//    - propriedade pública: erros
//
// Exporte todas!
// ============================================================

// Escreva seu código aqui:

export class AppError extends Error {
    public statusCode: number;
  
    constructor(statusCode: number, message: string) {
      super(message);
      this.statusCode = statusCode;
      this.name = "AppError";
    }
  }
  
  export class NotFoundError extends AppError {
    constructor(recurso: string) {
      super(404, `${recurso} não encontrado`);
    }
  }
  
  export class ValidationError extends AppError {
    public erros: string[];
  
    constructor(erros: string[]) {
      super(400, "Dados inválidos");
      this.erros = erros;
    }
  }