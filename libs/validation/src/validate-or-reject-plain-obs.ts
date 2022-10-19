import { plainToInstance, ClassConstructor } from 'class-transformer'
import { validateOrReject, ValidationError } from 'class-validator'
import { from, Observable } from 'rxjs'
import { fail, IResult, ok } from 'typescript-monads'

export function validateOrRejectPlainObservable<T extends object>(cls: ClassConstructor<T>, options: T): Observable<IResult<T, ValidationError[]>> {
  const optionsInstance = plainToInstance(cls, options)
  const promise = validateOrReject(optionsInstance)
    .then(() => ok<T, ValidationError[]>(optionsInstance))
    .catch(errs => fail<T, ValidationError[]>(errs))

  return from(promise)
}
