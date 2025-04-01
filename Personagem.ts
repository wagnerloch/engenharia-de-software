import { DAO } from "./DAO";
import {} from "./PersonagemDAO";

export abstract class Personagem implements DAO {
  constructor(
    protected _nome: string,
    protected _forca: number,
    protected _habilidadeMental: number,
    protected _poderDeAtaque: number,
    protected _esquiva: number,
    protected _resistencia: number,
    protected _vidaAtual: number,
    protected _vidaMaxima: number
  ) {}
  salvar<Personagem>(objeTo: Personagem): Personagem {
    throw new Error("Method not implemented.");
  }
  remover<Personagem>(idObjeto: number): Personagem {
    throw new Error("Method not implemented.");
  }
  listar<T>(): T[] {
    throw new Error("Method not implemented.");
  }
  atualizar<T>(objeto: T): T {
    throw new Error("Method not implemented.");
  }

  public abstract atacar(personagem: Personagem): void;

  public abstract contraAtacar(personagem: Personagem): void;

  public abstract aprimorarHabilidadePrincipal(): void;

  public abstract regenerarVida(): void;

  public get esquiva(): number {
    return this._esquiva;
  }
  public get vidaAtual(): number {
    return this._vidaAtual;
  }
  public get poderDeAtaque(): number {
    return this._poderDeAtaque;
  }
  public get resistencia(): number {
    return this._resistencia;
  }
  public get nome(): string {
    return this._nome;
  }
  public set vidaAtual(vidaAtual: number) {
    this._vidaAtual = vidaAtual;
  }
  public resumo(): string {
    return `${this._nome}: ${this._vidaAtual.toFixed(1)}/${this._vidaMaxima}`;
  }
}
