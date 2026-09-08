document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ELEMENTOS DO LOGIN
    // =========================

    const btnAluno = document.getElementById("btnAluno");
    const btnProfessor = document.getElementById("btnProfessor");
    const btnResponsavel = document.getElementById("btnResponsavel");

    const escolhaPerfil = document.getElementById("escolhaPerfil");
    const formularioLogin = document.getElementById("formularioLogin");

    const btnVoltar = document.getElementById("btnVoltar");
    const formLogin = document.getElementById("formLogin");

    const btnEsqueceuSenha =
        document.getElementById("btnEsqueceuSenha");

    const mensagemLogin =
        document.getElementById("mensagemLogin");


    // =========================
    // LOGIN DO ALUNO
    // =========================

    if (btnAluno) {

        btnAluno.addEventListener("click", function () {

            escolhaPerfil.style.display = "none";

            formularioLogin.style.display = "block";

            document.getElementById("ra").focus();

        });

    }


    // =========================
    // PROFESSOR
    // =========================

    if (btnProfessor) {

        btnProfessor.addEventListener("click", function () {

            alert("A área do professor estará disponível em breve! 👨‍🏫");

        });

    }


    // =========================
    // RESPONSÁVEL
    // =========================

    if (btnResponsavel) {

        btnResponsavel.addEventListener("click", function () {

            alert("A área do responsável estará disponível em breve! 👨‍👩‍👧");

        });

    }


    // =========================
    // VOLTAR
    // =========================

    if (btnVoltar) {

        btnVoltar.addEventListener("click", function () {

            formularioLogin.style.display = "none";

            escolhaPerfil.style.display = "block";

            mensagemLogin.textContent = "";

            formLogin.reset();

        });

    }


    // =========================
    // ESQUECEU A SENHA
    // =========================

    if (btnEsqueceuSenha) {

        btnEsqueceuSenha.addEventListener("click", function () {

            mensagemLogin.textContent =
                "Entre em contato com a escola para recuperar sua senha.";

        });

    }


    // =========================
    // ENTRAR
    // =========================

    if (formLogin) {

        formLogin.addEventListener("submit", function (event) {

            event.preventDefault();


            const ra =
                document.getElementById("ra").value.trim();

            const digito =
                document.getElementById("digito").value.trim();

            const senha =
                document.getElementById("senha").value.trim();


            // Verifica RA

            if (ra === "") {

                mensagemLogin.textContent =
                    "Digite seu RA.";

                document.getElementById("ra").focus();

                return;

            }


            // Verifica dígito

            if (digito === "") {

                mensagemLogin.textContent =
                    "Digite o dígito do seu RA.";

                document.getElementById("digito").focus();

                return;

            }


            // Verifica senha

            if (senha === "") {

                mensagemLogin.textContent =
                    "Digite sua senha.";

                document.getElementById("senha").focus();

                return;

            }


            // =========================
            // LOGIN APROVADO
            // =========================

            // Nome provisório do aluno
            // Depois podemos pegar isso do banco de dados.

            sessionStorage.setItem(
                "nomeAluno",
                "Aluno"
            );


            // Vai para a Home

            window.location.href = "home.html";

        });

    }


    // =========================
    // HOME
    // =========================

    const nomeAlunoTopo =
        document.getElementById("nomeAlunoTopo");

    const saudacaoAluno =
        document.getElementById("saudacaoAluno");


    if (nomeAlunoTopo && saudacaoAluno) {

        const nomeSalvo =
            sessionStorage.getItem("nomeAluno") || "Aluno";


        nomeAlunoTopo.textContent =
            nomeSalvo;


        saudacaoAluno.textContent =
            "Olá, " + nomeSalvo + "! 👋";

    }

});
const btnQuiz = document.getElementById("btnQuiz");

if (btnQuiz) {
    btnQuiz.addEventListener("click", function () {
        window.location.href = "quiz.html";
    });
}