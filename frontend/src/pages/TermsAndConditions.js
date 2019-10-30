import React, {useEffect} from 'react';
import './TermsAndConditions.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsAndConditions() {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return (
        <div>
            <Navbar />
            <div className="container containerBox p-4 mt-4 mb-5">
                <div>
                    <h1 className="pageTitle mb-4 mt-1"> TERMOS DE USO E POLÍTICA DE PRIVACIDADE </h1>
                    <p className="titleText">VISÃO GERAL</p>
                    <p>
                        Esse site é operado pela Exemplio. Em todo o site, os termos “nós”, “nos” e “nosso” se referem à equipe da Exemplio. A Exemplio proporciona esse site, incluindo todas as informações, ferramentas e serviços disponíveis deste site para você, o usuário, com a condição da sua aceitação de todos os termos, condições, políticas e avisos declarados aqui. Ao visitar nosso site, você está utilizando nossos “Serviços”. Consequentemente, você concorda com os seguintes termos e condições (“Termos de serviço”, “Termos”), incluindo os termos, condições e políticas adicionais mencionados neste documento e/ou disponíveis por hyperlink. Esses Termos de serviço se aplicam a todos os usuários do site, incluindo, sem limitação, os usuários que são navegadores, fornecedores, clientes, lojistas e/ou contribuidores de conteúdo. Por favor, leia esses Termos de serviço cuidadosamente antes de acessar ou utilizar o nosso site. Ao acessar ou usar qualquer parte do site, você concorda com os Termos de serviço. Quaisquer novos recursos ou ferramentas que forem adicionados ao site também devem estar sujeitos aos Termos de serviço. Você pode revisar a versão mais atual dos Termos de serviço quando quiser nesta página. Reservamos o direito de atualizar, alterar ou trocar qualquer parte desses Termos de serviço ao publicar atualizações e/ou alterações no nosso site. É sua responsabilidade verificar as alterações feitas nesta página periodicamente. Seu uso contínuo ou acesso ao site após a publicação de quaisquer alterações constitui aceitação de tais alterações. 
                    </p>
                    <p className="titleText">CONDIÇÕES GERAIS</p>
                    <p>
                        Você não deve usar nossos produtos para qualquer fim ilegal ou não autorizado. Você também não pode, ao usufruir deste serviço, violar quaisquer leis em sua jurisdição (incluindo, mas não limitado, a leis de direitos autorais). Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do Serviço, uso do Serviço, acesso ao Serviço, ou qualquer contato no site através do qual o serviço é fornecido, sem nossa permissão expressa por escrito. Os títulos usados nesse acordo são incluídos apenas por conveniência e não limitam ou afetam os Termos. 
                    </p>
                    <p className="titleText">PRECISÃO, INTEGRIDADE E ATUALIZAÇÃO DAS INFORMAÇÕES</p>
                    <p>
                        O material desse site é fornecido apenas para fins informativos e educacionais e não deve ser usado como a única base para tomar decisões sem consultar fontes de informações primárias ou alternativas. Reservamos o direito de modificar o cont eúdo desse site a qualquer momento, mas nós não temos obrigação de atualizar nenhuma informação em nosso site. Você concorda que é de sua responsabilidade monitorar alterações no nosso site. Qualquer utilização do material desse site é por sua conta e risco. 
                    </p>
                    <p className="titleText">FERRAMENTAS OPCIONAIS </p>
                    <p>
                        Podemos recomendar ou disponibilizar o acesso a ferramentas de terceiros que não monitoramos e nem temos qualquer controle. Você reconhece e concorda que nós fornecemos acesso a tais ferramentas ”como elas são” e “conforme a disponibilidade” sem quaisquer garantias, representações ou condições de qualquer tipo e sem qualquer endosso. Não nos responsabilizamos de forma alguma pelo seu uso de ferramentas opcionais de terceiros. Qualquer uso de ferramentas opcionais oferecidas através do site é inteiramente por sua conta e risco e você se familiarizar e aprovar os termos das ferramentas que são fornecidas por fornecedor(es) terceiro(s). Também podemos, futuramente, oferecer novos serviços e/ou recursos através do site. Tais recursos e/ou serviços novos também devem estar sujeitos idado as políticas e práticas de terceiros e certifique-se que você as entende antes de efetuar qualquer transa ção. As queixas, reclamações, preocupações ou questões relativas a produtos de terceiros devem ser direcionadas ao terceiro. 
                    </p>
                    <p className="titleText">COMENTÁRIOS, FEEDBACK, ETC. DO USUÁRIO</p>
                    <p>
                        Se, a nosso pedido, você enviar certos itens específicos (por exemplo, participação em um concurso), ou sem um pedido nosso, você enviar ideias criativas, sugestões, propostas, planos, ou outros materiais, seja online, por e-mail, pelo correio, ou de outra forma, você concorda que podemos, a qualquer momento, sem restrição, editar, copiar, publicar, distribuir, traduzir e de outra forma usar quaisquer comentários que você encaminhar para nós. Não nos responsabilizamos por: (1) manter quaisquer comentários em sigilo; (2) indenizar por quaisquer comentários; ou (3) responder quaisquer comentários. Podemos, mas não temos a obrigação, de monitorar, editar ou remover conteúdo que nós determinamos a nosso próprio critério ser contra a lei, ofensivo, ameaçador, calunioso, difamatório, pornográfico, obsceno ou censurável ou que viole a propriedade intelectual de terceiros ou estes Termos de serviço. Você concorda que seus comentários não violarão qualquer direito de terceiros, incluindo direitos autorais, marcas registradas, privacidade, personalidade ou outro direito pessoal ou de propriedade. Você concorda que os seus comentários não vão conter material difamatório, ilegal, abusivo ou obsceno. Eles também não conterão nenhum vírus de computador ou outro malware que possa afetar a operação do Serviço ou qualquer site relacionado. Você não pode usar um endereço de e-mail falso, fingir ser alguém diferente de si mesmo, ou de outra forma enganar a nós ou terceiros quanto à origem de quaisquer comentários. Você é o único responsável por quaisquer comentários que você faz e pela veracidade deles. Nós não assumimos qualquer responsabilidade ou obrigação por quaisquer comentários publicados por você ou por qualquer terceiro.
                    </p> 
                    <p className="titleText">USOS PROIBIDOS</p>
                    <p>
                        Além de outras proibições, conforme estabelecido nos Termos de serviço, você está proibido de usar o site ou o conteúdo para: (a) fins ilícitos; (b) solicitar outras pessoas a realizar ou participar de quaisquer atos ilícitos; (c) violar quaisquer regulamentos internacionais, provinciais, estaduais ou federais, regras, leis ou regulamentos locais; (d) infringir ou violar nossos direitos de propriedade intelectual ou os direitos de propriedade intelectual de terceiros; (e) para assediar, abusar, insultar, danificar, difamar, caluniar, depreciar, intimidar ou discriminar com base em gênero, orientação sexual, religião, etnia, raça, idade, nacionalidade ou deficiência; (f) apresentar informações falsas ou enganosas; (g) fazer o envio ou transmitir vírus ou qualquer outro tipo de código malicioso que será ou poderá ser utilizado para afetar a funcionalidade ou operação do Serviço ou de qualquer site relacionado, outros sites, ou da Internet; (h) coletar ou rastrear as informações pessoais de outras pessoas; (i) para enviar spam, phishing, pharm, pretext, spider, crawl, ou scrape; (j) para fins obscenos ou imorais; ou (k) para interferir ou contornar os recursos de segurança do Serviço ou de qualquer site relacionado, outros sites, ou da Internet. Reservamos o direito de rescindir o seu uso do Serviço ou de qualquer site relacionado por violar qualquer um dos usos proibidos.
                    </p> 
                    <p className="titleText">ISENÇÃO DE RESPONSABILIDADE DE GARANTIAS; LIMITAÇÃO DE RESPONSABILIDADE</p>
                    <p>
                        Você entende que a Exemplio não garante performance acadêmica, bolsa de estudos, ingresso em faculdades ou similares e não poderá ser responsabilizado pelo sucesso ou insucesso acadêmico, econômico ou político demonstrado pelo usuário. Você concorda que de tempos em tempos, podemos remover o serviço por períodos indefinidos de tempo ou cancelar a qualquer momento, sem te notificar. Você concorda que o seu uso ou incapacidade de usar o serviço é por sua conta e risco. Os serviços entregues são (exceto conforme declarado por nós) fornecidos sem garantia e conforme a disponibilidade para seu uso, sem qualquer representação, garantias ou condições de qualquer tipo, expressas ou implícitas, incluindo todas as garantias implícitas ou condições de comercialização, quantidade, adequação a uma finalidade específica, durabilidade, título, e não violação. Em nenhuma circunstância a Exemplio, nossos(as) coordenadores(as), editores(as), escritores(as), prestadores(as) de serviços ou qualquer colaborador(a) serão responsáveis por qualquer prejuízo, perda, reclamação ou danos diretos, indiretos, incidentais, punitivos, especiais ou consequentes de qualquer tipo de danos decorrentes do seu uso de qualquer um dos serviços ou quaisquer produtos adquiridos através de indicações ou direcionamentos de nosso serviço, ou para qualquer outra reclamação relacionada de alguma forma ao seu uso do serviço, incluindo, mas não limitado a, quaisquer erros ou omissões em qualquer conteúdo, ou qualquer perda ou dano de qualquer tipo como resultado do uso do serviço ou qualquer conteúdo (ou produto) publicado, transmitido ou de outra forma disponível através do serviço, mesmo se alertado ​​de tal possibilidade. 
                    </p>
                    <p className="titleText">INDENIZAÇÃO</p>
                    <p>
                        Você concorda em indenizar, defender e isentar Exemplio e nossos(as) subsidiários(as), afiliados(as), parceiros(as), funcionários(as), diretores(as), agentes, contratados(as), licenciantes, prestadores(as) de serviços, subcontratados(as), fornecedores(as), estagiários(as) e funcionários(as), de qualquer reclamação ou demanda por quaisquer terceiros devido à violação destes Termos de serviço ou aos documentos que incorporam por referência, ou à violação de qualquer lei ou os direitos de um terceiro. 
                    </p>
                    <p className="titleText">ALTERAÇÕES DOS TERMOS DE SERVIÇO </p>
                    <p>
                    Você pode rever a versão mais atual dos Termos de serviço a qualquer momento nessa página. Reservamos o direito, a nosso critério, de atualizar, modificar ou substituir qualquer parte destes Termos de serviço ao publicar atualizações e alterações no nosso site. É sua responsabilidade verificar nosso site periodicamente. Seu uso contínuo ou acesso ao nosso site ou ao Serviço após a publicação de quaisquer alterações a estes Termos de serviço constitui aceitação dessas alterações. 
                    </p>
                    <p className="titleText">INFORMAÇÕES DE CONTATO </p>
                    <p>
                        As perguntas sobre os Termos de serviço devem ser enviadas para nós através do contato_exemplio@teste.com
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}