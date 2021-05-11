import { MessageModel } from '../models';

//Repositories são adapters, que vão adaptar os dados vindo da nossa api para serem usados no data layer
export interface LoadMessageRepository {
    //Os repositories serão implementados na infraestrutura, por isso não devem ser usado aqui
    // a entidade Message do Domain, para evitar que a infraestrutura conheça do domínio.
    //Por isso criamos os Models, para ser uma abstração dessa camada.
    loadMessages: () => Promise<MessageModel[]>
}