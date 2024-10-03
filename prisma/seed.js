"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var author, ana, posts;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    author = {
                        name: "Ana Beatriz",
                        username: "anabeatriz_dev",
                        avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
                    };
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { username: author.username },
                            update: {},
                            create: author,
                        })];
                case 1:
                    ana = _a.sent();
                    console.log("Author Created: ".concat(ana));
                    posts = [
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
                            "title": "Introdução ao React",
                            "slug": "introducao-ao-react",
                            "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
                            "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/css-grid-na-pratica.png",
                            "title": "CSS Grid na Prática",
                            "slug": "css-grid-na-pratica",
                            "body": "Aprenda a criar layouts responsivos com CSS Grid. Este post aborda desde a definição de grid até a criação de layouts complexos de forma simples e eficaz.",
                            "markdown": "```css\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/vuejs-para-iniciantes.png",
                            "title": "Vue.js para Iniciantes",
                            "slug": "vuejs-para-iniciantes",
                            "body": "Vue.js é um framework progressivo para a construção de interfaces de usuário. Este guia inicial cobre as funcionalidades essenciais do Vue.",
                            "markdown": "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Olá Vue!'\n  }\n})\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/dicas-de-acessibilidade-web.png",
                            "title": "Dicas de Acessibilidade Web",
                            "slug": "dicas-de-acessibilidade-web",
                            "body": "Explorando a importância da acessibilidade na web, este post oferece dicas práticas para tornar seus sites mais acessíveis a todos os usuários.",
                            "markdown": "```html\n<a href=\"#\" aria-label=\"Saiba mais sobre acessibilidade\">Saiba mais</a>\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-typescript.png",
                            "title": "Introdução ao TypeScript",
                            "slug": "introducao-ao-typescript",
                            "body": "Este post é um guia introdutório ao TypeScript, explicando como ele aumenta a produtividade e melhora a manutenção do código JavaScript.",
                            "markdown": "```typescript\nfunction greeter(person: string) {\n  return 'Hello, ' + person;\n}\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/otimizacao-de-performance-no-react.png",
                            "title": "Otimização de Performance no React",
                            "slug": "otimizacao-de-performance-no-react",
                            "body": "Discutindo técnicas avançadas para otimizar a performance de aplicações React, este post aborda conceitos como memoização e lazy loading.",
                            "markdown": "```javascript\nconst MemoizedComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/explorando-flexbox-no-css.png",
                            "title": "Explorando Flexbox no CSS",
                            "slug": "explorando-flexbox-no-css",
                            "body": "Este post detalha o uso do Flexbox para criar layouts responsivos e flexíveis no CSS, com exemplos práticos para um entendimento fácil.",
                            "markdown": "```css\n.flex-container {\n  display: flex;\n  justify-content: space-around;\n}\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/angular-primeiros-passos.png",
                            "title": "Angular: Primeiros Passos",
                            "slug": "angular-primeiros-passos",
                            "body": "Ideal para iniciantes, este post introduz o Angular, um poderoso framework para desenvolvimento de aplicações web, com um exemplo básico.",
                            "markdown": "```typescript\n@Component({\n  selector: 'my-app',\n  template: '<h1>Olá Angular</h1>'\n})\nexport class AppComponent { }\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/gerenciamento-de-estado-com-redux.png",
                            "title": "Gerenciamento de Estado com Redux",
                            "slug": "gerenciamento-de-estado-com-redux",
                            "body": "Abordando um dos aspectos cruciais no desenvolvimento de aplicações React, este post ensina como gerenciar o estado de forma eficiente com Redux.",
                            "markdown": "```javascript\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'ACTION_TYPE':\n      return { ...state, ...action.payload };\n    default:\n      return state;\n  }\n};\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/sass-simplificando-o-css.png",
                            "title": "Sass: Simplificando o CSS",
                            "slug": "sass-simplificando-o-css",
                            "body": "Este post explora como o pré-processador Sass pode simplificar e melhorar a escrita de CSS, através de variáveis, mixins e funções.",
                            "markdown": "```scss\n$primary-color: #333;\nbody {\n  color: $primary-color;\n}\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/webpack-um-guia-para-iniciantes.png",
                            "title": "Webpack: Um Guia para Iniciantes",
                            "slug": "webpack-um-guia-para-iniciantes",
                            "body": "Aprenda a configurar o Webpack, uma poderosa ferramenta de empacotamento de módulos, neste guia passo a passo para iniciantes.",
                            "markdown": "```javascript\nmodule.exports = {\n  entry: './path/to/my/entry/file.js'\n};\n```",
                            "authorId": ana.id
                        },
                        {
                            "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/construindo-spa-com-vuejs.png",
                            "title": "Construindo SPA com Vue.js",
                            "slug": "construindo-spa-com-vuejs",
                            "body": "Este post oferece um tutorial detalhado sobre como construir uma Single Page Application (SPA) eficiente e interativa usando o framework Vue.js.",
                            "markdown": "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Bem-vindo à sua SPA Vue.js!'\n  }\n});\n```",
                            "authorId": ana.id
                        }
                    ];
                    return [4 /*yield*/, Promise.all(posts.map(function (post) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, prisma.post.upsert({
                                            where: { slug: post.slug },
                                            update: {},
                                            create: post
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    console.log('seed Ok');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
