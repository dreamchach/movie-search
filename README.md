1. TypeScript 설치
2. SPA 구현
참고자료
https://velog.io/@tlatjdgh3778/Vanilla-JavaScript%EB%A1%9C-SPA%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0


# Failed to resolve module specifier "dotenv"

해결책
`Failed to resolve module specifier 'dotenv'` 에러는 일반적으로 Node.js 환경에서 'dotenv' 모듈을 찾을 수 없을 때 발생합니다. 'dotenv'는 환경 변수를 로드하는 데 사용되는 모듈입니다.

이 문제를 해결하기 위해서는 다음 몇 가지 단계를 따르실 수 있습니다:

1. 'dotenv' 설치: 먼저 프로젝트 디렉토리에서 'dotenv' 모듈을 설치해야 합니다. 다음 명령어를 사용하여 설치할 수 있습니다:
```bash
Copy code
npm install dotenv
```

2. require를 사용하여 'dotenv' 로드: 코드 상단에 다음과 같이 'dotenv' 모듈을 로드하세요:
```javascript
const dotenv = require('dotenv');
```

3. 환경 변수 로드: 이제 환경 변수를 로드할 준비가 되었습니다. 보통 프로젝트 루트 폴더에 .env 파일을 만들고 거기에 환경 변수를 설정합니다. 예를 들어:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=password123
```
4. 'dotenv' 설정: .env 파일을 로드하기 전에 다음과 같이 설정하세요
```javascript
dotenv.config();
```

5. 모듈을 사용하여 환경 변수에 접근: 이제 'dotenv'를 사용하여 환경 변수에 접근할 수 있습니다.
```javascript
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
```

이러한 단계를 따르면 'dotenv' 모듈을 사용하여 환경 변수를 로드하고 접근할 수 있습니다. 에러가 계속 발생한다면, 프로젝트 구조나 설정을 다시 한 번 확인해보세요.

# Relative references must start with either "/", "./", or "../"

해결책
`Relative references must start with either '/', './', or '../'` 는 일반적으로 모듈을 불러올 때 발생하는 오류입니다. 이 오류는 모듈 경로가 올바르지 않을 때 발생합니다.

이러한 오류를 해결하기 위해 다음을 확인해보세요

1. 모듈 경로 확인: 모듈을 불러올 때 사용하는 경로가 올바른지 확인하세요. 모듈이나 파일이 실제로 해당 경로에 있는지 확인해야 합니다.

2. 경로 시작 확인: 경로가 정확한지 다시 한 번 확인하세요. 모듈 경로는 "/", "./", "../" 중 하나로 시작해야 합니다.

"/"는 프로젝트 루트부터 시작하는 절대 경로입니다.
"./"는 현재 디렉토리에서 시작하는 상대 경로입니다.
"../"는 상위 디렉토리에서 시작하는 상대 경로입니다.
3. 파일 확장자 확인: 파일을 불러올 때 확장자를 포함하는지 확인하세요. 예를 들어, .js, .json 등의 확장자가 필요할 수 있습니다.

4. 파일 이름 철자 확인: 파일 이름이나 폴더 이름의 철자가 정확한지 확인하세요. 대소문자를 구분해야 합니다.

5. 파일 경로의 대소문자 구분: Windows 운영체제에서는 파일 및 폴더 이름이 대소문자를 구분하지 않지만, Linux/macOS에서는 대소문자를 구분합니다. 파일 이름이나 폴더 이름이 정확한지 확인하세요.

예를 들어, 다음과 같이 모듈을 불러오는 코드가 있다고 가정해보겠습니다:

```javascript
const myModule = require('./myModule');
```

이 코드에서 './myModule'은 현재 디렉토리에서 시작하는 상대 경로입니다. 만약 myModule.js 파일이 현재 디렉토리에 없거나 파일 이름이 다르다면 이 오류가 발생할 수 있습니다.

모듈을 불러오는 코드와 관련된 부분을 다시 한 번 검토하고, 위에서 언급한 사항들을 확인해보세요. 그래도 문제가 해결되지 않으면 더 자세한 정보를 제공해주시면 도움을 드릴 수 있습니다.

# Uncaught ReferenceError: require is not defined 이라는 에러가 발생해

해결책

`"Uncaught ReferenceError: require is not defined"` 에러는 브라우저에서 CommonJS 스타일의 모듈 시스템을 사용하려고 할 때 발생합니다. 하지만 브라우저에서는 기본적으로 CommonJS 스타일의 모듈을 지원하지 않습니다.

SPA를 만들고 있다면, 일반적으로 웹팩(Webpack) 또는 Parcel과 같은 번들러를 사용하여 모듈을 관리하게 됩니다. 번들러를 사용하면 CommonJS 스타일의 모듈을 브라우저에서 사용할 수 있도록 변환해 줍니다.

여기서는 웹팩을 사용하는 예시를 들어보겠습니다:

1. 웹팩 설치: 프로젝트 폴더에서 웹팩을 설치합니다.
```bash
npm install webpack webpack-cli --save-dev
```

2. 'dotenv' 및 기타 모듈 설치: 필요한 모듈을 설치합니다.
```bash
npm install dotenv
```

3. 웹팩 설정 파일 생성: 프로젝트 루트에 webpack.config.js 파일을 만들고 다음과 같이 설정합니다:
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',  // 프로젝트 진입 파일
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'  // 필요한 경우 Babel을 사용하여 ES6+ 코드를 변환
      }
    ]
  }
};
```

4. 스크립트 추가: package.json 파일에 빌드 스크립트를 추가합니다.
```javascript
"scripts": {
  "build": "webpack"
}
```

5. 프로젝트 구조 변경: src 폴더를 만들고 그 안에 자바스크립트 파일을 이동시킵니다.

6. 자바스크립트 파일 수정: 필요한 모듈을 import로 불러오고, 환경 변수를 사용하는 부분을 설정합니다.

7. 빌드: 터미널에서 npm run build 명령을 실행하여 웹팩으로 빌드합니다.

8. 'dist' 폴더 확인: 빌드된 파일은 dist 폴더에 생성됩니다.

이제 브라우저에서 dist/bundle.js를 불러와 사용할 수 있습니다. SPA를 개발하는 경우에는 번들러를 사용하여 모듈을 관리하는 것이 일반적입니다.

# node를 사용하는데 webpack이나 parcel을 사용해도 괜찮을까?

해결책

Node.js 환경에서도 웹팩(Webpack)이나 Parcel과 같은 번들러를 사용하는 것은 가능합니다. 이들 번들러는 Node.js 환경에서도 동작하며, 프로젝트의 모듈들을 번들링하여 사용할 수 있도록 해줍니다.

다만, 주의해야 할 점은 번들러가 주로 프런트엔드 개발을 위해 사용되므로, 프런트엔드와 백엔드 코드를 함께 관리하는 경우에는 몇 가지 조정이 필요할 수 있습니다.

예를 들어, 프로젝트가 프런트엔드와 백엔드 모두를 다룬다면, 웹팩이나 Parcel 등의 번들러를 사용하여 프런트엔드 코드를 관리하고, Node.js의 기본 모듈 시스템을 사용하여 백엔드 코드를 관리하는 것이 일반적입니다.

이렇게 하면 프런트엔드 코드와 백엔드 코드를 분리하여 개발할 수 있고, 필요한 경우 각각을 번들링하거나 실행할 수 있습니다.

# TypeScript를 사용해 SPA 구현

해결책

TypeScript를 사용하여 SPA (Single Page Application)를 만들 수 있습니다. TypeScript는 JavaScript의 확장으로 정적 타입을 지원하는 언어로, 코드의 안정성과 가독성을 높여줍니다.

일반적으로 TypeScript를 사용하여 SPA를 개발할 때는 다음과 같은 단계를 따를 수 있습니다:

1. TypeScript 프로젝트 초기화:
```bash
npm init -y
```

2. TypeScript 및 관련 도구 설치:
```bash
npm install typescript tslib @types/node
```

3. TypeScript 설정 파일 생성:
```bash
npx tsc --init
```

이렇게 하면 tsconfig.json 파일이 생성됩니다. 이 파일에서 TypeScript 컴파일러의 설정을 구성할 수 있습니다.

4. SPA 프로젝트 구조 설정:
SPA를 개발할 때는 보통 프런트엔드 프레임워크나 라이브러리 (예: React, Angular, Vue 등)를 선택하고 그에 맞는 프로젝트 구조를 설정합니다.

5. 프로젝트 개발:
TypeScript로 프런트엔드 코드를 작성하고 필요한 모듈을 불러와 사용합니다. TypeScript를 사용하면 타입 정보를 활용하여 코드를 작성할 수 있습니다.

6. 번들러 사용 (선택 사항):
TypeScript 코드를 브라우저에서 실행 가능한 형태로 번들링하기 위해 Webpack이나 Parcel과 같은 번들러를 사용할 수 있습니다.

7. 실행 및 테스트:
프로젝트를 실행하고 테스트하여 정상적으로 동작하는지 확인합니다.

TypeScript를 사용하면 코드의 안정성을 높이고 개발 과정에서 발생할 수 있는 오류를 미리 방지할 수 있습니다. SPA를 개발할 때 TypeScript를 사용하는 것은 매우 효과적입니다.

# vanilla JavaScript로 SPA Router기능 구현

해결책

바닐라 자바스크립트로 라우팅 기능을 구현하려면, window.history API와 popstate 이벤트를 사용하여 브라우저의 URL을 관리하면 됩니다. 아래는 간단한 예시입니다:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla JS Router</title>
</head>
<body>
  <nav>
    <a href="/" onclick="navigate(event, '/')">Home</a>
    <a href="/about" onclick="navigate(event, '/about')">About</a>
  </nav>
  <div id="content"></div>

  <script>
    function navigate(event, path) {
      event.preventDefault();
      history.pushState(null, null, path);
      handleRoute(path);
    }

    function handleRoute(path) {
      const contentDiv = document.getElementById('content');

      switch (path) {
        case '/':
          contentDiv.innerHTML = '<h1>Home Page</h1>';
          break;
        case '/about':
          contentDiv.innerHTML = '<h1>About Page</h1>';
          break;
        default:
          contentDiv.innerHTML = '<h1>Not Found</h1>';
      }
    }

    window.addEventListener('popstate', () => {
      handleRoute(window.location.pathname);
    });

    // 초기 라우팅 처리
    handleRoute(window.location.pathname);
  </script>
</body>
</html>
```

이 예시에서는 네비게이션 메뉴를 클릭했을 때 navigate 함수가 호출되어 브라우저의 URL을 업데이트하고, history.pushState를 사용하여 페이지를 이동합니다. 그리고 handleRoute 함수에서는 URL에 따라 페이지 내용을 업데이트합니다.

또한 popstate 이벤트를 사용하여 뒤로가기나 앞으로가기 버튼을 클릭했을 때의 동작을 처리합니다.

이 예시는 간단한 라우터의 기능을 구현한 것이며, 실제 프로젝트에서는 상태 관리나 더 복잡한 라우팅 로직을 추가해야 할 수 있습니다. 이러한 경우에는 라우팅 라이브러리를 사용하는 것이 더 효율적일 수 있습니다.

# vanilla JavaScript로 TypeScript를 설치

해결책

Vanilla JavaScript는 타입 시스템을 갖고 있지 않기 때문에 TypeScript를 설치할 수 없습니다. TypeScript는 JavaScript의 확장 언어로, 정적 타입을 제공하여 코드의 안정성을 높이는 역할을 합니다.

따라서 TypeScript를 사용하려면 TypeScript 파일 (확장자가 .ts인 파일)을 작성하고 이를 TypeScript 컴파일러를 통해 JavaScript 파일로 변환해야 합니다.

아래는 TypeScript를 사용하여 Vanilla JavaScript 프로젝트를 시작하는 간단한 예시입니다:

1. 프로젝트 초기화: 프로젝트 폴더를 만들고 해당 폴더로 이동한 후 다음 명령어를 사용하여 프로젝트를 초기화합니다.

```bash
npm init -y
```

2. TypeScript 설치: TypeScript를 프로젝트에 추가합니다.

```bash
npm install typescript --save-dev
```

3. tsconfig.json 파일 생성: TypeScript 설정 파일인 tsconfig.json 파일을 생성합니다.

```bash
npx tsc --init
```

이 파일을 사용하여 TypeScript 컴파일러의 동작을 설정할 수 있습니다.

4. TypeScript 파일 작성: src 폴더에 TypeScript 파일을 만들어서 코드를 작성합니다. 예를 들어, app.ts 파일을 만들고 다음과 같이 작성할 수 있습니다:

```javascript
const message: string = 'Hello, TypeScript!';
console.log(message);
```

5. 컴파일: TypeScript 파일을 JavaScript로 컴파일합니다.

```bash
npx tsc
```

이 명령어를 실행하면 app.ts 파일이 app.js로 컴파일됩니다.

6. HTML 파일 작성: index.html 파일을 만들어서 컴파일된 JavaScript 파일을 로드합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TypeScript Vanilla JS</title>
</head>
<body>
  <script src="dist/app.js"></script>
</body>
</html>
```
위 예시에서는 dist/app.js 파일을 로드하도록 했습니다. 이 경로는 실제 프로젝트 구조에 맞게 설정해야 합니다.

7. 실행: index.html 파일을 브라우저에서 열어서 개발자 도구의 콘솔을 확인하면 "Hello, TypeScript!"이 출력될 것입니다.

이제 Vanilla JavaScript 프로젝트에서 TypeScript를 사용할 수 있습니다. TypeScript를 사용하면 코드의 안정성을 높일 수 있으며, 자바스크립트의 기능을 확장하여 사용할 수 있습니다.

# Property 'matches' does not exist on type 'EventTarget'.

해결책

이 오류는 TypeScript에서 DOM 이벤트 핸들러 함수에서 matches 메서드를 사용하려고 할 때 발생할 수 있습니다. matches 메서드는 DOM 요소의 메서드로, 특정한 선택자와 요소가 일치하는지 확인합니다.

해결하기 위해서는 EventTarget 타입을 Element로 캐스팅해주어야 합니다. 이렇게 하면 해당 요소가 가지고 있는 DOM 메서드와 속성을 사용할 수 있습니다.

예를 들어, 다음과 같이 코드를 수정할 수 있습니다:

```javascript
function handleEvent(event: Event) {
  const target = event.target as Element; // 이 부분에서 타입 캐스팅을 수행합니다.

  if (target.matches('.your-selector')) {
    // 원하는 작업 수행
  }
}
```

위 코드에서 .your-selector 부분은 실제로 사용하려는 CSS 선택자로 대체되어야 합니다.

이렇게 하면 TypeScript가 해당 요소를 Element로 인식하고, matches 메서드를 사용할 수 있게 됩니다.

# Argument of type 'null' is not assignable to parameter of type 'string'.

해결책

이 오류는 TypeScript에서 문자열이 아닌 null 값을 문자열이 필요한 곳에 전달하려고 할 때 발생합니다.

예를 들어, 다음과 같은 코드에서 발생할 수 있습니다:

```javascript
const myString: string = null; // 오류 발생
```

해결 방법은 다음과 같습니다:

1. null이 아닌 값을 할당: 가장 간단한 해결 방법은 myString에 문자열이나 다른 유효한 값(non-null)을 할당하는 것입니다.

```javascript
const myString: string = 'Hello';
```

2. 타입이 nullable로 설정된 변수로 사용: 만약 해당 변수가 nullable하다면, 타입을 string | null로 설정합니다.

```javascript
let myString: string | null = null; // 허용됨
```

3. Strict Null Checks 비활성화: TypeScript의 Strict Null Checks 옵션을 해제할 수 있습니다. 이렇게 하면 null 값을 어떤 타입에도 할당할 수 있습니다. 다만, 이는 타입 안전성을 잃을 수 있으므로 주의가 필요합니다.

```javascript
// tsconfig.json

{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

주의: Strict Null Checks를 해제하는 것은 코드의 안정성을 저하시킬 수 있습니다. 가능하면 Nullable 타입을 명시적으로 다루는 것이 좋습니다.

위의 해결 방법 중 하나를 선택하여 해당 오류를 해결할 수 있습니다.

# Property 'href' does not exist on type 'Element'.

해결책
이 오류는 TypeScript에서 DOM 요소(Element)에 href 프로퍼티를 사용하려고 할 때 발생합니다. 기본적으로 TypeScript는 DOM 요소에 대해 href와 같은 특정 프로퍼티를 인식하지 않습니다.

해결하기 위해서는 해당 요소가 실제로 HTMLAnchorElement 또는 HTMLAreaElement와 같은 특정 요소인지를 확인하고, 그에 따라 타입을 캐스팅해주어야 합니다.

예를 들어, 다음과 같이 코드를 수정할 수 있습니다:

```javascript
function handleLinkClick(event: Event) {
  const target = event.target as HTMLAnchorElement;

  if (target && target.href) {
    console.log(target.href);
  }
}
```

위의 코드에서 event.target를 HTMLAnchorElement로 캐스팅하여 href 프로퍼티를 사용할 수 있게 되었습니다. 이렇게 하면 TypeScript가 HTMLAnchorElement 타입을 인식하고, href 프로퍼티를 사용할 수 있게 됩니다.

만약 다른 타입의 DOM 요소에서 href를 사용하려고 한다면, 해당 요소의 타입에 따라 적절한 타입 캐스팅을 수행해야 합니다.

# An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.

해결책

이 오류는 TypeScript에서 .ts 확장자를 가진 파일만 import 할 수 있도록 설정되어 있을 때, 다른 확장자를 가진 파일을 import 하려고 할 때 발생합니다.

이 문제를 해결하기 위해서는 두 가지 방법이 있습니다:

1. tsconfig.json 설정 변경: tsconfig.json 파일을 열고, allowImportingTsExtensions 옵션을 true로 설정합니다. 이렇게 하면 TypeScript가 .ts 확장자 이외의 파일도 import 할 수 있습니다.

```javascript
{
  "compilerOptions": {
    "allowImportingTsExtensions": true
  }
}
```

2. Import 경로 수정: 대신, import 경로를 .ts 확장자를 가진 파일로 변경합니다.

예를 들어, 다음과 같이 변경합니다:

```javascript
import { someModule } from './someModule.ts';
```

이렇게 하면 TypeScript가 파일 확장자를 인식하고 import 할 수 있습니다.

둘 중 하나의 방법을 선택하여 해당 오류를 해결할 수 있습니다.

만약 파일의 확장자를 명시했는데도 위와 같은 오류가 발생한다면, 아래와 같은 사항을 확인해보세요:

3. tsconfig.json 설정 확인: tsconfig.json 파일에서 allowImportingTsExtensions 옵션이 true로 설정되어 있는지 확인하세요.

```javascript
{
  "compilerOptions": {
    "allowImportingTsExtensions": true
  }
}
```

4. 파일 경로 확인: 파일 경로가 올바른지 확인하세요. 만약 파일이 실제로 ./js/pages/Home.ts 경로에 있는지 다시 한번 확인해보세요.

5. 파일 확장자 확인: Home.ts 파일이 정말로 TypeScript 파일인지 확인하세요. 파일이 올바른 확장자를 가지고 있는지 다시 확인해보세요.

6. 대소문자 구분 확인: 파일 이름과 경로는 대소문자를 구분합니다. 파일 이름이나 경로가 정확한지 다시 확인해보세요.

7. 프로젝트 구조 확인: 프로젝트 구조가 올바른지 확인하세요. 만약 파일이 예상한 위치에 있는지 다시 한번 확인해보세요.

만약 이들을 모두 확인했는데도 문제가 해결되지 않는다면, 다른 부분에 문제가 있는 것일 수 있습니다. 이 경우에는 프로젝트의 전체 구조와 설정을 검토해보는 것이 좋습니다.

# Option 'allowImportingTsExtensions' can only be used when either 'noEmit' or 'emitDeclarationOnly' is set.

해결책

이 오류는 TypeScript 컴파일러 옵션 중에서 allowImportingTsExtensions가 사용될 때, noEmit 또는 emitDeclarationOnly 중 하나가 설정되어 있어야 함을 나타냅니다.

allowImportingTsExtensions 옵션은 TypeScript 파일 외의 다른 확장자를 import 할 때 사용됩니다. 그러나 이 옵션을 사용하려면 컴파일러가 .ts 파일을 생성하지 않도록 noEmit 또는 emitDeclarationOnly 옵션을 설정해야 합니다.

따라서 해결 방법은 다음 중 하나를 선택하는 것입니다:

1. tsconfig.json 수정: tsconfig.json 파일을 열고, noEmit 옵션을 추가하거나 true로 설정합니다.

```javascript
{
  "compilerOptions": {
    "noEmit": true,
    "allowImportingTsExtensions": true
  }
}
```

또는

```javascript
{
  "compilerOptions": {
    "emitDeclarationOnly": true,
    "allowImportingTsExtensions": true
  }
}
```

2. 둘 중 하나만 사용: allowImportingTsExtensions 옵션을 사용하려면, noEmit 또는 emitDeclarationOnly 중 하나만 선택하여 사용해야 합니다.

이렇게 하면 allowImportingTsExtensions 옵션을 사용하면서 오류를 해결할 수 있습니다.

# The left-hand side of an assignment expression may not be an optional property access.

해결책

이 오류 메시지는 TypeScript에서 선택적(optional) 프로퍼티에 값을 할당하려고 할 때 발생합니다. 아래는 예시입니다:

```javascript
interface MyObject {
  property?: string;
}

const myObj: MyObject = {};

myObj.property = "someValue"; // 에러: 할당 식의 좌변은 선택적 프로퍼티 접근일 수 없습니다.
```

이 예시에서 property 프로퍼티는 ? 기호로 선택적(optional)으로 표시되어 있습니다. 이 프로퍼티에 값을 할당하려고 하면 TypeScript에서는 프로퍼티가 존재하지 않을 수 있기 때문에 에러를 발생시킵니다.

이를 해결하기 위해 몇 가지 옵션이 있습니다:

1. 프로퍼티가 존재하는지 확인: 값을 할당하기 전에 프로퍼티가 객체에 존재하는지 확인하세요. 이를 위해 먼저 정의되어 있는지 확인할 수 있습니다.

```javascript
if (myObj.property !== undefined) {
  myObj.property = "someValue";
}
```

2. 프로퍼티를 선택적이지 않게 만들기: 프로퍼티가 항상 존재해야 하는 경우, ? 기호를 제거하여 선택적(optional)이 아닌 것으로 만들 수 있습니다.

```javascript
interface MyObject {
  property: string;
}

const myObj: MyObject = {
  property: "someValue"
};
```

3. 선택적이지 않은 임시 변수 사용: 선택적 프로퍼티의 값을 비 선택적인 임시 변수에 할당하고 나서 해당 임시 변수를 수정할 수 있습니다.

```javascript
const tempProperty = myObj.property;

if (tempProperty !== undefined) {
  tempProperty = "someValue";
}
```

특정 상황에 가장 적합한 옵션을 선택하세요.

3. Login Page 디자인

# javascript로 배경색을 변경

해결책

JavaScript를 사용하여 HTML 요소의 배경색을 변경하는 방법은 다음과 같습니다:

```javascript
// JavaScript로 요소를 선택합니다.
var element = document.getElementById("elementID"); // 요소의 ID를 사용하는 예시

// 선택한 요소의 배경색을 변경합니다.
element.style.backgroundColor = "컬러코드 또는 컬러이름";
```

위 코드에서, "elementID"는 배경색을 변경하고자 하는 HTML 요소의 ID입니다. "컬러코드 또는 컬러이름"은 원하는 배경색을 나타내는 CSS 컬러 코드나 이름을 사용하면 됩니다.

예를 들어, 요소의 ID가 "myElement"이고 배경색을 빨간색으로 변경하고 싶다면, 다음과 같이 코드를 작성할 수 있습니다:

```javascript
var element = document.getElementById("myElement");
element.style.backgroundColor = "red";
```

이제 "myElement"의 배경색이 빨간색으로 변경됩니다.

# scss에서 hover 사용

해결책

SCSS에서 :hover 상태를 사용하려면 일반적으로 다음과 같은 방법을 사용합니다:

일반 CSS와 동일한 방법으로 :hover 선택자를 사용합니다.
예를 들어, 다음은 SCSS에서 :hover를 사용하여 요소의 배경색을 변경하는 예시입니다:

```css
.my-element {
  background-color: blue;

  &:hover {
    background-color: red;
  }
}
```

위의 코드에서, .my-element 클래스의 기본 배경색은 파란색이고, 해당 요소가 호버될 때 배경색이 빨간색으로 변경됩니다. &는 부모 선택자를 나타냅니다.

변수를 사용하여 hover 상태 스타일을 정의할 수도 있습니다.
```css
Copy code
$primary-color: blue;
$hover-color: red;

.my-element {
  background-color: $primary-color;

  &:hover {
    background-color: $hover-color;
  }
}
```

이 방법은 재사용성을 높일 수 있습니다. $primary-color와 $hover-color는 원하는 색상 값을 나타내는 변수입니다.

이렇게 하면 SCSS에서 :hover 상태를 사용하여 요소의 스타일을 변경할 수 있습니다.

# JavaScript를 사용한 <img>태그 제어

1. 이미지 경로 수정: src 폴더에 이미지를 넣고, 이를 import하여 사용하는 것이 좋습니다.

예시:

```javascript
import logoOne from '../public/images/cta-logo-one.svg';

const getHtml = () => {
  return `<img id="login-logo-one" src="${logoOne}" alt="logo-one" />`;
}

export default getHtml;
```
위와 같이 이미지를 import하여 변수에 할당하고, 그 변수를 템플릿 리터럴에 넣어 사용합니다.

2. Parcel 설정 확인: Parcel이 이미지 파일을 올바르게 처리하도록 설정되어 있는지 확인하세요. 대부분의 경우 기본 설정에서 이미지 파일은 자동으로 번들링됩니다.

3. 서버 실행: 개발 서버가 실행 중이어야 이미지가 올바르게 로드됩니다.

4. 파일 경로에 대문자 확인: 파일 시스템은 대소문자를 구분하므로 파일 이름과 경로가 정확한지 다시 한번 확인하세요.

5. 프로젝트 구조 확인: 프로젝트 구조가 올바른지 확인하세요. src 폴더에 이미지 폴더(images)가 포함되어 있어야 합니다.

이러한 단계를 따라도 문제가 해결되지 않는다면, 더 많은 정보가 필요할 수 있습니다. 이 경우 더 많은 코드 및 프로젝트 구성 정보를 제공해 주시면 도움을 드릴 수 있습니다.

# Cannot find module '../../public/images/cta-logo-one.svg' or its corresponding type declarations.

이러한 오류는 TypeScript가 해당 모듈을 찾지 못한다는 것을 나타냅니다. 일반적으로 TypeScript에서 이미지 파일을 모듈로 가져오려면 몇 가지 추가적인 설정이 필요합니다.

1. 타입 선언 파일 생성: 먼저, TypeScript가 이미지 파일을 모듈로 인식할 수 있도록 타입 선언 파일(.d.ts)을 생성해야 합니다. 프로젝트 루트에 images.d.ts 또는 유사한 이름의 파일을 만들고 다음 내용을 추가합니다:

```javascript
declare module "*.svg" {
  const content: any;
  export default content;
}
```

이 파일은 SVG 파일을 모듈로 사용할 수 있도록 선언합니다.

2. 이미지 가져오기: TypeScript 파일에서 이미지를 가져올 때는 다음과 같이 사용합니다:

```javascript
import logoOne from '../../public/images/cta-logo-one.svg';

const getHtml = () => {
  return `<img id="login-logo-one" src="${logoOne}" alt="logo-one" />`;
}

export default getHtml;
```

위와 같이 import 문을 사용하여 이미지를 가져오고, 해당 변수를 템플릿 리터럴에 사용합니다.

3. 확장자에 따른 모듈 추가: 만약 SVG 파일 이외에도 다른 이미지 확장자를 사용하고 싶다면, images.d.ts 파일에 해당 확장자에 대한 모듈을 추가해야 합니다.

예를 들어, PNG 파일을 사용하려면 다음과 같이 추가할 수 있습니다:

```javascript
declare module "*.png" {
  const content: any;
  export default content;
}
```

그리고 TypeScript 파일에서 PNG 파일을 가져오는 것은 아래와 같이 할 수 있습니다:

```javascript
import logoTwo from '../../public/images/cta-logo-two.png';
```

이러한 단계를 따라 이미지를 모듈로 사용하도록 TypeScript를 구성하면 오류가 해결될 것입니다.
