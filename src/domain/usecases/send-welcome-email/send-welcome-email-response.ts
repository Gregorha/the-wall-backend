import { Either } from '@/shared/either'
import { EmailServiceError } from '@/domain/errors'

export type SendEmailResponse = Either<EmailServiceError, void>