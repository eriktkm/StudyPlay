// ========================================
// MURAL DE DÚVIDAS
// 6 matérias → 3 dúvidas por matéria
// Matéria → dúvidas → ajuda
// ========================================

const nomeAlunoMural = document.getElementById("nomeAlunoMural");
const listaDuvidas = document.querySelector(".lista-duvidas");

const materias = [
    {
        materia: "Matemática",
        emoji: "📐",
        duvidas: [
            {
                pergunta: "Como resolvo uma equação do 2º grau?",
                ajuda: "Use a fórmula de Bhaskara. Primeiro identifique a, b e c em ax² + bx + c = 0. Depois calcule Δ = b² − 4ac e use x = (−b ± √Δ) / 2a."
            },
            {
                pergunta: "Como saber se uma função é crescente ou decrescente?",
                ajuda: "Em uma função do 1º grau f(x) = ax + b, observe o valor de a. Se a > 0, a função é crescente. Se a < 0, ela é decrescente."
            },
            {
                pergunta: "Como calcular a probabilidade de um evento?",
                ajuda: "Quando todos os resultados têm a mesma chance, use: probabilidade = casos favoráveis ÷ casos possíveis. Depois, se quiser, transforme o resultado em porcentagem."
            }
        ]
    },

    {
        materia: "Português",
        emoji: "📚",
        duvidas: [
            {
                pergunta: "Como identificar uma oração subordinada?",
                ajuda: "Veja se a oração depende sintaticamente de outra oração. Ela pode exercer uma função dentro da oração principal e geralmente é introduzida por uma conjunção ou pronome relativo."
            },
            {
                pergunta: "Como diferenciar denotação de conotação?",
                ajuda: "Denotação é o sentido literal da palavra. Conotação é o sentido figurado. Analise o contexto da frase para descobrir qual sentido está sendo utilizado."
            },
            {
                pergunta: "Como encontrar a tese de um texto?",
                ajuda: "A tese é a ideia principal que o autor defende. Procure a opinião ou posição central do texto e observe quais argumentos aparecem para sustentá-la."
            }
        ]
    },

    {
        materia: "Geografia",
        emoji: "🌎",
        duvidas: [
            {
                pergunta: "Como interpretar uma escala em um mapa?",
                ajuda: "A escala mostra a relação entre a distância no mapa e a distância real. Em uma escala 1:100.000, por exemplo, 1 cm no mapa representa 100.000 cm na realidade."
            },
            {
                pergunta: "O que é globalização?",
                ajuda: "É o processo de intensificação das relações entre diferentes partes do mundo, envolvendo comércio, tecnologia, informações, capitais e circulação de pessoas."
            },
            {
                pergunta: "Como entender a transição demográfica?",
                ajuda: "É a mudança nas taxas de natalidade e mortalidade de uma população ao longo do desenvolvimento de uma sociedade. Nas etapas mais avançadas, essas taxas tendem a diminuir."
            }
        ]
    },

    {
        materia: "Biologia",
        emoji: "🧬",
        duvidas: [
            {
                pergunta: "Como funciona a divisão celular?",
                ajuda: "A mitose produz duas células geneticamente semelhantes e participa do crescimento e da renovação dos tecidos. A meiose produz células com metade do número de cromossomos."
            },
            {
                pergunta: "Qual é a função do DNA?",
                ajuda: "O DNA armazena as informações genéticas dos organismos. Essas informações participam da produção de proteínas e da transmissão das características hereditárias."
            },
            {
                pergunta: "Como funciona a seleção natural?",
                ajuda: "Indivíduos de uma população apresentam variações. Quando uma característica favorece a sobrevivência ou reprodução em determinado ambiente, ela pode se tornar mais comum ao longo das gerações."
            }
        ]
    },

    {
        materia: "Física",
        emoji: "⚡",
        duvidas: [
            {
                pergunta: "Como calcular a velocidade média?",
                ajuda: "Use: velocidade média = distância total ÷ tempo total. Por exemplo, 120 km percorridos em 2 horas correspondem a uma velocidade média de 60 km/h."
            },
            {
                pergunta: "Como aplicar a segunda lei de Newton?",
                ajuda: "Use a fórmula F = m · a. A força resultante é igual à massa multiplicada pela aceleração. Confira sempre as unidades utilizadas."
            },
            {
                pergunta: "Como calcular a energia cinética?",
                ajuda: "Use Ec = m · v² ÷ 2. A massa deve estar em quilogramas e a velocidade em metros por segundo para que o resultado seja dado em joules."
            }
        ]
    },

    {
        materia: "História",
        emoji: "🏛️",
        duvidas: [
            {
                pergunta: "Como entender as causas da Revolução Francesa?",
                ajuda: "Entre os fatores estão a crise financeira do Estado, as desigualdades sociais, os privilégios do clero e da nobreza, dificuldades econômicas e a influência das ideias iluministas."
            },
            {
                pergunta: "O que foi a Revolução Industrial?",
                ajuda: "Foi um processo de transformação econômica e social marcado pela mecanização da produção, crescimento das fábricas e mudanças nas relações de trabalho, iniciado na Inglaterra no século XVIII."
            },
            {
                pergunta: "Como entender a Era Vargas?",
                ajuda: "O período teve diferentes fases e foi marcado por centralização política, industrialização, mudanças nas leis trabalhistas e, durante o Estado Novo, maior autoritarismo e controle político."
            }
        ]
    }
];


// ========================================
// NOME DO ALUNO
// ========================================

function atualizarNome() {

    if (!nomeAlunoMural) {
        return;
    }

    const nome = sessionStorage.getItem("nomeAluno");

    if (nome) {
        nomeAlunoMural.textContent = nome;
    }
}


// ========================================
// CRIAR O MURAL
// ========================================

function criarMural() {

    if (!listaDuvidas) {
        return;
    }

    listaDuvidas.innerHTML = "";

    materias.forEach((materia) => {

        const cardMateria = document.createElement("div");

        cardMateria.className = "materia-mural";

        cardMateria.innerHTML = `
            <button
                type="button"
                class="cabecalho-materia"
                aria-expanded="false"
            >

                <span class="icone-materia">
                    ${materia.emoji}
                </span>

                <span class="texto-materia">

                    <span class="nome-materia">
                        ${materia.materia}
                    </span>

                    <span class="quantidade-materia">
                        3 dúvidas frequentes
                    </span>

                </span>

                <span class="seta-materia">
                    +
                </span>

            </button>

            <div
                class="duvidas-materia"
                hidden
            ></div>
        `;


        const botaoMateria =
            cardMateria.querySelector(".cabecalho-materia");

        const listaMateria =
            cardMateria.querySelector(".duvidas-materia");


        // ========================================
        // CRIA AS 3 DÚVIDAS
        // ========================================

        materia.duvidas.forEach((duvida, indice) => {

            const cardDuvida =
                document.createElement("div");

            cardDuvida.className =
                "duvida-interna";


            cardDuvida.innerHTML = `

                <button
                    type="button"
                    class="pergunta-interna"
                    aria-expanded="false"
                >

                    <span class="numero-duvida">
                        ${indice + 1}
                    </span>

                    <span class="texto-duvida">

                        <span class="rotulo-duvida">
                            Dúvida ${indice + 1}
                        </span>

                        <strong>
                            ${duvida.pergunta}
                        </strong>

                    </span>

                    <span class="mais-interna">
                        +
                    </span>

                </button>


                <div
                    class="ajuda-interna"
                    hidden
                >

                    <span class="icone-ajuda">
                        💡
                    </span>

                    <div>

                        <strong>
                            Ajuda
                        </strong>

                        <p>
                            ${duvida.ajuda}
                        </p>

                    </div>

                </div>
            `;


            const botaoDuvida =
                cardDuvida.querySelector(".pergunta-interna");

            const ajuda =
                cardDuvida.querySelector(".ajuda-interna");


            // ========================================
            // ABRIR / FECHAR A AJUDA
            // ========================================

            botaoDuvida.addEventListener("click", () => {

                const aberta =
                    cardDuvida.classList.toggle("aberta");

                botaoDuvida.setAttribute(
                    "aria-expanded",
                    aberta
                );

                ajuda.hidden = !aberta;
            });


            listaMateria.appendChild(cardDuvida);

        });


        // ========================================
        // ABRIR / FECHAR A MATÉRIA
        // ========================================

        botaoMateria.addEventListener("click", () => {

            const aberta =
                cardMateria.classList.toggle("aberta");

            botaoMateria.setAttribute(
                "aria-expanded",
                aberta
            );

            listaMateria.hidden = !aberta;

        });


        listaDuvidas.appendChild(cardMateria);

    });
}


// ========================================
// INICIAR
// ========================================

atualizarNome();
criarMural();