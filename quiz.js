// ==========================================
// STUDYPLAY - QUIZ
// 1 QUIZ POR MATÉRIA
// 5 PERGUNTAS POR QUIZ
// NÍVEL: 3º ANO DO ENSINO MÉDIO
// ==========================================

const listaQuizzes = document.getElementById("listaQuizzes");
const areaAtividade = document.getElementById("areaAtividade");
const resultadoQuiz = document.getElementById("resultadoQuiz");

const nomeAlunoQuiz = document.getElementById("nomeAlunoQuiz");
const tituloAtividade = document.getElementById("tituloAtividade");
const materiaAtividade = document.getElementById("materiaAtividade");
const emojiAtividade = document.getElementById("emojiAtividade");

const pontuacaoAtual = document.getElementById("pontuacaoAtual");
const progressoQuiz = document.getElementById("progressoQuiz");
const perguntaQuiz = document.getElementById("perguntaQuiz");
const alternativasQuiz = document.getElementById("alternativasQuiz");
const feedbackQuiz = document.getElementById("feedbackQuiz");

const btnProxima = document.getElementById("btnProxima");

const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const mensagemResultado = document.getElementById("mensagemResultado");

const btnVoltarLista = document.getElementById("btnVoltarLista");
const btnRefazer = document.getElementById("btnRefazer");
const btnEscolherOutro = document.getElementById("btnEscolherOutro");


// ==========================================
// NOME DO ALUNO
// ==========================================

const nomeSalvo = sessionStorage.getItem("nomeAluno");

if (nomeSalvo && nomeAlunoQuiz) {
    nomeAlunoQuiz.textContent = nomeSalvo;
}


// ==========================================
// BANCO DE QUIZZES
// ==========================================

const quizzes = [

    // ======================================
    // MATEMÁTICA
    // ======================================

    {
        id: 1,
        materia: "Matemática",
        titulo: "Desafio Matemático",
        emoji: "📐",

        perguntas: [

            {
                pergunta: "Uma função quadrática é dada por f(x) = x² - 6x + 5. Quais são suas raízes?",
                alternativas: [
                    "1 e 5",
                    "2 e 4",
                    "-1 e -5",
                    "0 e 5"
                ],
                correta: 0
            },

            {
                pergunta: "Se log₂(x) = 5, qual é o valor de x?",
                alternativas: [
                    "10",
                    "16",
                    "25",
                    "32"
                ],
                correta: 3
            },

            {
                pergunta: "Uma PA possui primeiro termo 4 e razão 3. Qual é o 10º termo?",
                alternativas: [
                    "27",
                    "28",
                    "31",
                    "34"
                ],
                correta: 2
            },

            {
                pergunta: "Qual é o valor de sen(30°)?",
                alternativas: [
                    "1",
                    "√3/2",
                    "1/2",
                    "0"
                ],
                correta: 2
            },

            {
                pergunta: "Uma urna possui 5 bolas vermelhas e 3 azuis. Retirando uma bola ao acaso, qual é a probabilidade de ela ser azul?",
                alternativas: [
                    "3/5",
                    "3/8",
                    "5/8",
                    "1/3"
                ],
                correta: 1
            }

        ]
    },


    // ======================================
    // PORTUGUÊS
    // ======================================

    {
        id: 2,
        materia: "Português",
        titulo: "Mestre da Língua",
        emoji: "📚",

        perguntas: [

            {
                pergunta: "Em 'Embora estivesse cansado, continuou estudando', a oração iniciada por 'Embora' é:",
                alternativas: [
                    "Subordinada adverbial causal",
                    "Subordinada adverbial concessiva",
                    "Subordinada adverbial temporal",
                    "Coordenada sindética adversativa"
                ],
                correta: 1
            },

            {
                pergunta: "Na frase 'Os alunos que estudaram foram aprovados', a oração 'que estudaram' é:",
                alternativas: [
                    "Oração subordinada substantiva",
                    "Oração subordinada adverbial",
                    "Oração subordinada adjetiva",
                    "Oração coordenada"
                ],
                correta: 2
            },

            {
                pergunta: "Qual alternativa apresenta uma característica típica do Modernismo brasileiro da primeira fase?",
                alternativas: [
                    "Valorização exclusiva da linguagem clássica",
                    "Ruptura com padrões tradicionais",
                    "Imitação direta dos modelos greco-romanos",
                    "Rejeição da linguagem cotidiana"
                ],
                correta: 1
            },

            {
                pergunta: "Em 'A vida é um palco', qual figura de linguagem está presente?",
                alternativas: [
                    "Metáfora",
                    "Hipérbole",
                    "Ironia",
                    "Eufemismo"
                ],
                correta: 0
            },

            {
                pergunta: "Assinale a alternativa em que o uso da crase está correto:",
                alternativas: [
                    "Fui à escola pela manhã.",
                    "Fui à pé para casa.",
                    "Entreguei o livro à ele.",
                    "Começou à chover."
                ],
                correta: 0
            }

        ]
    },


    // ======================================
    // GEOGRAFIA
    // ======================================

    {
        id: 3,
        materia: "Geografia",
        titulo: "Explorador do Mundo",
        emoji: "🌎",

        perguntas: [

            {
                pergunta: "Qual processo está diretamente relacionado ao crescimento das cidades e à concentração populacional em áreas urbanas?",
                alternativas: [
                    "Urbanização",
                    "Desertificação",
                    "Reflorestamento",
                    "Êxodo rural inverso"
                ],
                correta: 0
            },

            {
                pergunta: "O fenômeno El Niño está relacionado principalmente:",
                alternativas: [
                    "Ao resfriamento permanente dos oceanos",
                    "Ao aquecimento anormal das águas do Pacífico Equatorial",
                    "À formação de geleiras no Atlântico",
                    "À diminuição da radiação solar"
                ],
                correta: 1
            },

            {
                pergunta: "A globalização econômica caracteriza-se principalmente por:",
                alternativas: [
                    "Isolamento dos mercados nacionais",
                    "Redução das relações comerciais internacionais",
                    "Maior integração entre economias e mercados",
                    "Fim das empresas multinacionais"
                ],
                correta: 2
            },

            {
                pergunta: "Qual é uma consequência comum do desmatamento da Amazônia?",
                alternativas: [
                    "Aumento da biodiversidade",
                    "Redução da erosão",
                    "Perda de biodiversidade",
                    "Diminuição das emissões de carbono"
                ],
                correta: 2
            },

            {
                pergunta: "O processo de industrialização tende a provocar:",
                alternativas: [
                    "Redução da urbanização",
                    "Maior concentração de atividades econômicas nas cidades",
                    "Fim dos fluxos migratórios",
                    "Diminuição da infraestrutura urbana"
                ],
                correta: 1
            }

        ]
    },


    // ======================================
    // CIÊNCIAS
    // ======================================

    {
        id: 4,
        materia: "Ciências",
        titulo: "Clube da Ciência",
        emoji: "🔬",

        perguntas: [

            {
                pergunta: "Qual molécula carrega a maior parte da informação genética dos seres vivos?",
                alternativas: [
                    "ATP",
                    "DNA",
                    "Glicose",
                    "Hemoglobina"
                ],
                correta: 1
            },

            {
                pergunta: "Na respiração celular, a maior parte do ATP é produzida principalmente:",
                alternativas: [
                    "No núcleo",
                    "Nos ribossomos",
                    "Nas mitocôndrias",
                    "No complexo golgiense"
                ],
                correta: 2
            },

            {
                pergunta: "Qual processo produz duas células geneticamente semelhantes à célula original?",
                alternativas: [
                    "Meiose",
                    "Mitose",
                    "Fecundação",
                    "Mutação"
                ],
                correta: 1
            },

            {
                pergunta: "As vacinas atuam principalmente estimulando:",
                alternativas: [
                    "A digestão",
                    "O sistema imunológico",
                    "A produção de glicose",
                    "A circulação sanguínea"
                ],
                correta: 1
            },

            {
                pergunta: "Em uma cadeia alimentar, os organismos produtores são geralmente:",
                alternativas: [
                    "Carnívoros",
                    "Herbívoros",
                    "Autótrofos",
                    "Decompositores"
                ],
                correta: 2
            }

        ]
    },


    // ======================================
    // HISTÓRIA
    // ======================================

    {
        id: 5,
        materia: "História",
        titulo: "Viagem pela História",
        emoji: "🏛️",

        perguntas: [

            {
                pergunta: "A Revolução Francesa de 1789 foi influenciada diretamente por ideias:",
                alternativas: [
                    "Iluministas",
                    "Feudais",
                    "Mercantilistas medievais",
                    "Absolutistas"
                ],
                correta: 0
            },

            {
                pergunta: "A Guerra Fria foi caracterizada principalmente pela disputa entre:",
                alternativas: [
                    "Brasil e Argentina",
                    "Estados Unidos e União Soviética",
                    "França e Alemanha",
                    "China e Japão"
                ],
                correta: 1
            },

            {
                pergunta: "Uma das principais características do Estado Novo brasileiro foi:",
                alternativas: [
                    "Ampliação da democracia direta",
                    "Autoritarismo e centralização política",
                    "Fim do poder presidencial",
                    "Descentralização administrativa"
                ],
                correta: 1
            },

            {
                pergunta: "A Revolução Industrial começou na Inglaterra principalmente durante:",
                alternativas: [
                    "Século XV",
                    "Século XVI",
                    "Século XVIII",
                    "Século XX"
                ],
                correta: 2
            },

            {
                pergunta: "A queda do Muro de Berlim, em 1989, tornou-se um símbolo:",
                alternativas: [
                    "Do início da Primeira Guerra Mundial",
                    "Do enfraquecimento do bloco socialista europeu",
                    "Da expansão do Império Romano",
                    "Do início da Revolução Francesa"
                ],
                correta: 1
            }

        ]
    },


    // ======================================
    // INGLÊS
    // ======================================

    {
        id: 6,
        materia: "Inglês",
        titulo: "English Challenge",
        emoji: "🇬🇧",

        perguntas: [

            {
                pergunta: "Choose the correct option: 'If I had more time, I ___ another language.'",
                alternativas: [
                    "learn",
                    "will learn",
                    "would learn",
                    "learned"
                ],
                correta: 2
            },

            {
                pergunta: "What is the meaning of 'although'?",
                alternativas: [
                    "Porque",
                    "Embora",
                    "Portanto",
                    "Enquanto"
                ],
                correta: 1
            },

            {
                pergunta: "Choose the correct sentence:",
                alternativas: [
                    "She have been studying.",
                    "She has been studying.",
                    "She having been studying.",
                    "She has study been."
                ],
                correta: 1
            },

            {
                pergunta: "Which sentence is in the passive voice?",
                alternativas: [
                    "The students completed the project.",
                    "The teacher explains the lesson.",
                    "The project was completed by the students.",
                    "The students are completing the project."
                ],
                correta: 2
            },

            {
                pergunta: "Choose the correct word: 'The exam was difficult; ___, most students passed.'",
                alternativas: [
                    "however",
                    "because",
                    "although",
                    "unless"
                ],
                correta: 0
            }

        ]
    }

];


// ==========================================
// VARIÁVEIS DO QUIZ
// ==========================================

let quizAtual = null;
let perguntaAtual = 0;
let pontuacao = 0;


// ==========================================
// CRIAR OS CARDS DOS QUIZZES
// ==========================================

function criarCardsQuizzes() {

    if (!listaQuizzes) return;

    listaQuizzes.innerHTML = "";

    quizzes.forEach(function(quiz) {

        const card = document.createElement("div");

        card.className = "card-quiz";

        card.innerHTML = `
            <div class="icone-quiz-card">
                ${quiz.emoji}
            </div>

            <div class="conteudo-card-quiz">

                <span class="materia-quiz">
                    ${quiz.materia}
                </span>

                <h2>
                    ${quiz.titulo}
                </h2>

                <p>
                    Teste seus conhecimentos em
                    ${quiz.materia}.
                </p>

                <span class="quantidade-perguntas">
                    ${quiz.perguntas.length} perguntas • 3º ano
                </span>

            </div>

            <div class="seta-quiz">
                →
            </div>
        `;

        card.addEventListener("click", function() {
            iniciarQuiz(quiz.id);
        });

        listaQuizzes.appendChild(card);
    });
}


// ==========================================
// INICIAR QUIZ
// ==========================================

function iniciarQuiz(id) {

    quizAtual = quizzes.find(function(quiz) {
        return quiz.id === id;
    });

    if (!quizAtual) return;

    perguntaAtual = 0;
    pontuacao = 0;

    if (listaQuizzes) {
        listaQuizzes.style.display = "none";
    }

    const cabecalho = document.querySelector(".cabecalho-quiz");

    if (cabecalho) {
        cabecalho.style.display = "none";
    }

    if (resultadoQuiz) {
        resultadoQuiz.style.display = "none";
    }

    if (areaAtividade) {
        areaAtividade.style.display = "block";
    }

    if (tituloAtividade) {
        tituloAtividade.textContent = quizAtual.titulo;
    }

    if (materiaAtividade) {
        materiaAtividade.textContent = quizAtual.materia;
    }

    if (emojiAtividade) {
        emojiAtividade.textContent = quizAtual.emoji;
    }

    mostrarPergunta();
}


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function mostrarPergunta() {

    if (!quizAtual) return;

    const pergunta = quizAtual.perguntas[perguntaAtual];

    if (!pergunta) return;

    if (pontuacaoAtual) {
        pontuacaoAtual.textContent =
            `${pontuacao} pontos`;
    }

    if (progressoQuiz) {
        progressoQuiz.textContent =
            `Pergunta ${perguntaAtual + 1} de ${quizAtual.perguntas.length}`;
    }

    if (perguntaQuiz) {
        perguntaQuiz.textContent =
            pergunta.pergunta;
    }

    if (alternativasQuiz) {

        alternativasQuiz.innerHTML = "";

        pergunta.alternativas.forEach(function(alternativa, indice) {

            const botao = document.createElement("button");

            botao.type = "button";
            botao.className = "alternativa";

            botao.textContent = alternativa;

            botao.addEventListener("click", function() {
                responder(indice);
            });

            alternativasQuiz.appendChild(botao);

        });
    }

    if (feedbackQuiz) {
        feedbackQuiz.textContent = "";
        feedbackQuiz.style.display = "none";
    }

    if (btnProxima) {
        btnProxima.style.display = "none";
    }
}


// ==========================================
// RESPONDER
// ==========================================

function responder(indiceEscolhido) {

    if (!quizAtual) return;

    const pergunta = quizAtual.perguntas[perguntaAtual];

    const botoes =
        alternativasQuiz.querySelectorAll(".alternativa");

    botoes.forEach(function(botao) {
        botao.disabled = true;
    });

    if (indiceEscolhido === pergunta.correta) {

        pontuacao++;

        if (feedbackQuiz) {
            feedbackQuiz.textContent =
                "✅ Muito bem! Você acertou!";
            feedbackQuiz.style.display = "block";
        }

        if (botoes[indiceEscolhido]) {
            botoes[indiceEscolhido].classList.add("correta");
        }

    } else {

        if (feedbackQuiz) {
            feedbackQuiz.textContent =
                `❌ Não foi dessa vez. A resposta correta é: ${pergunta.alternativas[pergunta.correta]}`;
            feedbackQuiz.style.display = "block";
        }

        if (botoes[indiceEscolhido]) {
            botoes[indiceEscolhido].classList.add("errada");
        }

        if (botoes[pergunta.correta]) {
            botoes[pergunta.correta].classList.add("correta");
        }
    }

    if (pontuacaoAtual) {
        pontuacaoAtual.textContent =
            `${pontuacao} pontos`;
    }

    if (btnProxima) {
        btnProxima.style.display = "block";
    }
}


// ==========================================
// PRÓXIMA PERGUNTA
// ==========================================

if (btnProxima) {

    btnProxima.type = "button";

    btnProxima.addEventListener("click", function() {

        perguntaAtual++;

        if (perguntaAtual < quizAtual.perguntas.length) {

            mostrarPergunta();

        } else {

            mostrarResultado();

        }

    });
}


// ==========================================
// RESULTADO
// ==========================================

function mostrarResultado() {

    if (areaAtividade) {
        areaAtividade.style.display = "none";
    }

    if (resultadoQuiz) {
        resultadoQuiz.style.display = "block";
    }

    if (pontuacaoFinal) {

        pontuacaoFinal.textContent =
            `${pontuacao} / ${quizAtual.perguntas.length}`;

    }

    if (mensagemResultado) {

        if (pontuacao === 5) {

            mensagemResultado.textContent =
                "🏆 Excelente! Você acertou todas as perguntas!";

        } else if (pontuacao >= 4) {

            mensagemResultado.textContent =
                "🌟 Muito bom! Você teve um ótimo desempenho!";

        } else if (pontuacao >= 3) {

            mensagemResultado.textContent =
                "👍 Bom trabalho! Continue estudando para melhorar!";

        } else {

            mensagemResultado.textContent =
                "📚 Continue estudando e tente novamente!";
        }
    }
}


// ==========================================
// VOLTAR PARA A LISTA DE QUIZZES
// ==========================================

function voltarParaLista() {

    quizAtual = null;
    perguntaAtual = 0;
    pontuacao = 0;

    if (areaAtividade) {
        areaAtividade.style.display = "none";
    }

    if (resultadoQuiz) {
        resultadoQuiz.style.display = "none";
    }

    if (listaQuizzes) {
        listaQuizzes.style.display = "grid";
    }

    const cabecalho = document.querySelector(".cabecalho-quiz");

    if (cabecalho) {
        cabecalho.style.display = "flex";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// BOTÃO "VOLTAR PARA OS QUIZZES"
// ==========================================

if (btnVoltarLista) {

    btnVoltarLista.type = "button";

    btnVoltarLista.addEventListener("click", function(event) {

        event.preventDefault();

        voltarParaLista();

    });
}


// ==========================================
// REFAZER QUIZ
// ==========================================

if (btnRefazer) {

    btnRefazer.type = "button";

    btnRefazer.addEventListener("click", function(event) {

        event.preventDefault();

        if (quizAtual) {
            iniciarQuiz(quizAtual.id);
        }

    });
}


// ==========================================
// ESCOLHER OUTRO QUIZ
// ==========================================

if (btnEscolherOutro) {

    btnEscolherOutro.type = "button";

    btnEscolherOutro.addEventListener("click", function(event) {

        event.preventDefault();

        voltarParaLista();

    });
}


// ==========================================
// BOTÃO INÍCIO
// ==========================================

const btnInicioQuiz =
    document.getElementById("btnInicioQuiz");

if (btnInicioQuiz) {

    btnInicioQuiz.addEventListener("click", function(event) {

        event.preventDefault();

        window.location.href = "home.html";

    });
}


// ==========================================
// BOTÃO MURAL
// ==========================================

const btnMuralQuiz =
    document.getElementById("btnMuralQuiz");

if (btnMuralQuiz) {

    btnMuralQuiz.addEventListener("click", function(event) {

        event.preventDefault();

        window.location.href = "mural.html";

    });
}


// ==========================================
// INICIAR
// ==========================================

criarCardsQuizzes();