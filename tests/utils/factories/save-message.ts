import { SaveMessageService } from '@/data/services';
import { PGSaveMessageRepository } from '@/infra/postgres/repositories/save-message';

const repo = new PGSaveMessageRepository();
export const saveMessageService = new SaveMessageService(repo);
