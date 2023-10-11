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

# CSS의 가상 요소(pseudo-element)

```css
.button {
  background-color: blue;

  &:after {
    content: "→";
  }
}
```

# CSS background속성의 순서

CSS에서 background 속성은 여러 하위 속성들을 포함할 수 있는 단축 속성입니다. 이러한 하위 속성들은 특정 순서로 나열되어 있습니다. 일반적으로 다음과 같은 순서로 사용됩니다:

background-color
background-image
background-repeat
background-attachment
background-position

```css
.element {
  background: #fff url('background.jpg') no-repeat fixed top right;
}
```

만약 특정 하위 속성을 생략하고 싶다면, 그냥 생략하면 됩니다.

```css
.element {
  background: #fff url('background.jpg') no-repeat fixed;
}
```

그러나 이때에도 순서는 위에서 설명한 순서대로 유지됩니다.

# axios 사용

Axios는 브라우저와 Node.js를 위한 Promise 기반의 HTTP 클라이언트 라이브러리입니다. 
이를 사용하여 HTTP 요청을 보내고 응답을 처리할 수 있습니다. 

1. Axios 설치

먼저 프로젝트에 Axios를 설치해야 합니다. 
Node.js 환경에서는 npm 또는 yarn을 사용하여 설치할 수 있습니다.

```bash
npm install axios
yarn add axios
```

2. Axios를 프로젝트에 포함

Axios를 프로젝트에 포함하려면 import 또는 require 문을 사용합니다.

```javascript
// ES6 import 문
import axios from 'axios';

// 또는 CommonJS require 문
const axios = require('axios');
```

3. GET 요청 보내기

GET 요청은 다음과 같이 보낼 수 있습니다

```javascript
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

2. POST 요청 보내기

POST 요청을 보내는 방법은 다음과 같습니다

```javascript
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

3. 다른 HTTP 메서드 사용

Axios는 다양한 HTTP 메서드를 지원합니다 (GET, POST, PUT, DELETE 등)

4. 에러 처리

Axios 요청이 실패했을 때 에러를 처리하는 방법은 `.catch()` 메서드를 사용하는 것입니다.

```javascript
axios.get('https://jsonplaceholder.typicode.com/nonexistent')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

5. 추가 설정

Axios는 다양한 옵션을 설정할 수 있습니다. 
예를 들어, 요청 헤더 설정, timeout 설정 등이 있습니다.

```javascript
axios.get('https://jsonplaceholder.typicode.com/posts', {
  headers: {
    'Authorization': 'Bearer myAccessToken'
  },
  timeout: 5000 // 5초 동안 응답이 없으면 요청이 실패합니다.
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

이러한 방법으로 Axios를 사용하여 HTTP 요청을 보내고 응답을 처리할 수 있습니다. 
이때 주의할 점은 비동기적으로 작동하기 때문에 `.then()`과 `.catch()`를 사용하여 응답 및 에러를 처리해야 합니다.

# axios instance 생성

Axios 인스턴스를 만들려면 Axios 라이브러리를 사용하여 먼저 Axios 인스턴스를 생성하고 그 후에 해당 인스턴스를 사용하여 요청을 보낼 수 있습니다. 
이렇게 하면 여러 요청에서 동일한 설정을 공유할 수 있습니다.

아래는 Axios 인스턴스를 만들고 설정하는 예시입니다

1. Axios 라이브러리 설치

먼저 프로젝트에 Axios를 설치해야 합니다. 

2. Axios 인스턴스 생성

Axios 인스턴스를 만들려면 `axios.create()` 메서드를 사용합니다. 
이 메서드에 설정을 전달하여 원하는대로 인스턴스를 구성할 수 있습니다.

예를 들어, baseURL을 설정하고 timeout을 5초로 지정한 Axios 인스턴스를 만드는 방법은 다음과 같습니다:

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com/',
  timeout: 5000
});
```

3. 인스턴스를 사용하여 요청 보내기

이제 instance 변수를 사용하여 요청을 보낼 수 있습니다. 
인스턴스는 get, post, put, delete 등의 HTTP 메서드를 지원합니다.

```javascript
instance.get('/endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

나머지 HTTP 메서드도 동일한 방식으로 사용할 수 있습니다.

4. 추가 설정

인스턴스를 만들 때 추가 설정을 할 수 있습니다. 
위의 예시에서는 baseURL과 timeout을 설정했지만, 다른 설정도 가능합니다.

```javascript
const instance = axios.create({
  baseURL: 'https://api.example.com/',
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer myAccessToken'
  }
});
```

이렇게 하면 Axios 인스턴스를 만들고 설정할 수 있습니다. 
이 인스턴스를 사용하면 공통된 설정을 가진 여러 요청을 쉽게 보낼 수 있습니다.

# Type 지정

TypeScript를 사용하여 Axios 요청과 응답을 타입 지정하는 방법을 알려드리겠습니다.

1. Axios 라이브러리 설치

먼저 TypeScript 프로젝트에 Axios를 설치해야 합니다.

2. Axios 요청과 응답의 타입 정의

TypeScript에서 Axios 요청과 응답을 타입 정의하기 위해 다음과 같이 interface 또는 type을 사용합니다.

```javascript
// src/types/axios.ts

// Axios 요청의 응답 데이터 타입
interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
}

// Axios 요청 구성 옵션 타입
interface AxiosRequestConfig {
  // 추가적인 설정들...
}
```

3. Axios 인스턴스 생성

이제 Axios 인스턴스를 생성하고 해당 인스턴스를 사용하여 요청을 보낼 수 있습니다. 
타입 정의를 활용해 인스턴스를 만들 수 있습니다.

```javascript
// src/utils/api.ts

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com/',
  timeout: 5000,
});

export default instance;
```

위 예시에서 AxiosInstance를 사용하여 Axios 인스턴스의 타입을 지정합니다.

4. 사용 예시

만든 Axios 인스턴스를 사용하여 요청을 보낼 때, TypeScript는 요청과 응답의 타입을 추론합니다.

```javascript
// src/components/ExampleComponent.ts

import api from '../utils/api';

api.get('/endpoint')
  .then((response: AxiosResponse<{ name: string }>) => {
    const data = response.data;
    console.log(data.name); // TypeScript는 'name'이라는 프로퍼티가 있는 것을 알고 있습니다.
  })
  .catch((error: any) => {
    console.error(error);
  });
```

위의 예시에서 AxiosResponse 제네릭을 사용하여 응답 데이터의 타입을 정의했습니다.

이러한 방식으로 TypeScript를 사용하여 Axios 요청과 응답을 타입 정의할 수 있습니다. 
이렇게 하면 코드의 가독성과 안정성을 높일 수 있습니다.

# Type 'string | Promise<string>' is not assignable to type 'string'. Type 'Promise<string>' is not assignable to type 'string'.

이 에러는 TypeScript에서 타입 불일치가 발생했을 때 발생합니다. 
에러 메시지를 보면 'string | Promise<string>' 타입은 'string' 타입에 할당할 수 없다는 내용입니다.

이런 경우, 해당 부분에서는 실제로 string 혹은 Promise<string> 중 어느 타입을 반환할지를 명시적으로 처리해주어야 합니다. 
아래는 이를 해결하는 방법들 중 일부입니다:

1. Async/Await 사용

가장 간단한 해결 방법은 async/await을 사용하여 Promise를 동기적으로 처리하는 것입니다.

```javascript
async function getData(): Promise<string> {
  return await someAsyncFunction();
}
```

이 경우 함수는 `Promise<string>`을 반환하지만, 코드 내부에서는 마치 동기적으로 처리하는 것처럼 사용할 수 있습니다.

2. Promise 체이닝

Promise 체이닝을 사용하여 Promise를 처리할 수 있습니다

```javascript
someAsyncFunction()
  .then((result: string) => {
    // 처리 로직
  })
  .catch((error: Error) => {
    // 에러 처리
  });
```

이 경우 각 `.then()` 블록에서 올바른 타입의 데이터를 처리할 수 있습니다.

3. 타입 단언(Type Assertion)

TypeScript에게 해당 값이 어떤 타입이라고 확신시킬 수 있다면, 타입 단언을 사용할 수 있습니다:

```javascript
const result: string = await someAsyncFunction() as string;
```

이 경우에는 개발자가 해당 값이 실제로 string 타입이라고 확신할 때만 사용해야 합니다.

위의 방법 중 하나를 선택하여 Promise의 반환 값을 올바른 타입으로 처리하면 됩니다.

# promise 함수의 결과 받기

Promise를 사용하는 함수의 결과를 동기적으로 받고 싶을 때에는 async/await를 활용할 수 있습니다. 
async/await는 비동기 코드를 동기적으로 다룰 수 있게 해줍니다.

예를 들어, 다음과 같이 Promise를 반환하는 함수가 있다고 가정해보겠습니다:

```javascript
function getData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });
}
```

이 함수는 1초 후에 `Hello`를 `resolve` 하는 `Promise`를 반환합니다.

이제 이 함수의 값을 동기적으로 받고 싶다면, 다음과 같이 `async/await`를 사용할 수 있습니다:

```javascript
async function main() {
  const result = await getData();
  console.log(result); // 'Hello'
}
main();
```

위의 예시에서 main 함수는 getData 함수를 호출하고, 해당 Promise가 resolve될 때까지 기다린 다음 결과를 result 변수에 할당합니다.

이를 통해 async/await를 사용하여 Promise를 동기적으로 처리할 수 있습니다.

2. Promise 체이닝 (Then chaining)

Promise 객체는 `.then()` 메서드를 사용하여 비동기 작업이 완료될 때의 동작을 정의할 수 있습니다.

```javascript
function getData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });
}

getData()
  .then((result) => {
    console.log(result); // 'Hello'
  });
```

3. 콜백 함수 사용

콜백 함수를 사용하여 비동기 작업이 완료될 때의 동작을 정의할 수 있습니다.

```javascript
function getData(callback: (result: string) => void) {
  setTimeout(() => {
    callback('Hello');
  }, 1000);
}

getData((result) => {
  console.log(result); // 'Hello'
});
```

4. Generator 함수

Generator 함수를 사용하여 비동기 작업을 처리할 수도 있습니다. 
이 방법은 복잡하고 권장되지 않습니다.

```javascript
function* getData() {
  yield new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });
}

const generator = getData();
const promise = generator.next().value;

promise.then((result) => {
  console.log(result); // 'Hello'
});
```

5. 비동기 라이브러리

비동기 작업을 처리하는 라이브러리들도 있습니다. 
예를 들어, rxjs와 같은 라이브러리는 강력한 비동기 기능을 제공합니다.

6. 콜백 패턴 사용

일반적으로는 콜백 함수를 사용하여 비동기 작업을 처리합니다. 
이 방법은 오래된 방식이지만 여전히 많이 사용됩니다.

그러나 가능하다면 async/await를 활용하는 것이 좋습니다.

# js에서 react의 usestate 생성

JavaScript로 React의 useState와 비슷한 상태 관리 기능을 만들어보겠습니다. 
이를 위해서는 클로저와 함수를 활용할 것입니다.

```javascript
function useState(initialValue) {
  let value = initialValue;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  return [getValue, setValue];
}

// 사용 예시
const [count, setCount] = useState(0);

console.log(count()); // 0

setCount(5);
console.log(count()); // 5
```

위의 코드는 useState 함수를 정의합니다. 
이 함수는 초기값을 받아 클로저 내부에서 유지하면서 현재 값을 반환하고 설정하는 함수를 반환합니다.

사용 예시에서 useState를 호출하여 [getValue, setValue] 배열을 받고, 각각을 count와 setCount에 할당했습니다. 
count는 현재 값에 접근하는 함수이고, setCount는 값을 설정하는 함수입니다.

이 방법은 React의 useState와 비슷한 동작을 하지만, 이 코드는 React 컴포넌트와는 무관하게 독립적으로 동작합니다. 
때문에 React 컴포넌트 내에서 사용하기 위해서는 이를 활용한 다른 로직을 추가해야 할 것입니다.

# Expected 1 arguments, but got 0.

오류 메시지 "Expected 1 argument, but got 0"은 함수 호출 시 인자를 넘기지 않았을 때 발생하는 오류입니다.

1. 인자가 필요함에도 불구하고 인자를 받지 못했을 때
해당 오류는 함수가 기대한 만큼의 인자를 받지 못했을 때 발생하는데, 예를 들어 함수가 매개변수를 기대하고 있지만 호출 시 아무런 인자를 전달하지 않은 경우입니다.

아마도 이전에 작성한 코드에서 문제가 있을 것입니다. 
코드를 확인하고 해당 함수를 호출할 때 올바른 인자를 제공했는지 다시 확인해보세요. 

2. 매개변수를 추가하지 않는 방법

함수 정의 시 매개변수를 명시하지 않으면 됩니다. 
예를 들어:

```javascript
function myFunction() {
  // 함수 본문
}
```
이렇게 하면 해당 함수를 호출할 때 매개변수를 전달하지 않아도 됩니다.

3. 매개변수가 선택적인 경우:

TypeScript에서는 매개변수를 선택적으로 만들 수 있습니다. 
이 경우 함수 내부에서 해당 매개변수를 사용하기 전에 존재 여부를 확인하는 것이 중요합니다. 
예를 들어:

```javascript
function myFunction(optionalParam) {
  if (optionalParam) {
    // optionalParam을 사용할 수 있음
  }
}
```
이런 식으로 매개변수가 전달되지 않을 수 있음을 고려하여 함수를 작성할 수 있습니다.

4. 디폴트 매개변수 사용:

ES6 이후에는 함수의 매개변수에 기본값을 설정할 수 있습니다. 
이를 통해 매개변수가 전달되지 않았을 경우 기본값을 사용할 수 있습니다. 
예를 들어:

```javascript
function myFunction(optionalParam = 'defaultValue') {
  // ...
}
```

이 경우 optionalParam이 전달되지 않으면 'defaultValue'가 사용됩니다.

5. 호출 시 주의사항:

함수를 호출할 때도 해당 함수가 매개변수를 받지 않는다는 것을 명심하세요. 
예를 들어:

```javascript
myFunction(); // 올바른 호출
myFunction('someValue'); // 매개변수를 전달하지 않아야 함
```

만약 이러한 조치들이 문제를 해결하지 못하고 여전히 오류가 발생한다면, 코드의 다른 부분에서 문제가 발생한 것일 수 있으므로 전체 코드를 다시 검토하는 것이 좋습니다.


# An argument for 'newValue' was not provided.

이 오류 메시지 "An argument for 'newValue' was not provided."는 함수를 호출할 때 필요한 매개변수 newValue를 제공하지 않았을 때 발생하는 오류입니다.

해당 오류가 발생한 경우, 함수 호출을 확인하고 필요한 매개변수를 제공하는지 다시 확인해야 합니다.

예를 들어, 아래와 같은 상황에서 이 오류가 발생할 수 있습니다:

```javascript
function setValue(newValue) {
  // ...
}

setValue(); // 오류 발생: newValue에 대한 매개변수를 제공하지 않음
```

이 경우 setValue 함수를 호출할 때 newValue에 대한 매개변수가 필요하지만, 위 코드에서는 이를 제공하지 않았기 때문에 오류가 발생합니다.

이를 해결하기 위해서는 setValue 함수 호출 시 적절한 값을 제공해야 합니다. 
예를 들어:

```javascript
setValue('someValue'); // 올바르게 호출됨: 'someValue'를 newValue로 전달
```

만약 이 오류가 다른 상황에서 발생한다면, 해당 부분의 코드를 다시 검토하고 필요한 매개변수를 제공하도록 확인하세요.

# JS로 react의 useEffect 구현

JavaScript에서 함수를 사용하여 useEffect와 유사한 효과를 구현할 수 있습니다. 
이를 보통 "Custom Hook"이라고 부릅니다. 
Custom Hook을 사용하면 함수형 컴포넌트에서도 상태와 효과를 관리할 수 있습니다.

아래는 useEffect와 유사한 동작을 하는 Custom Hook을 만드는 예시입니다:

```javascript
function useEffect(callback, dependencies) {
  // 컴포넌트가 마운트될 때와 dependencies가 변경될 때만 콜백 실행
  if (!dependencies || (dependencies && dependencies.length > 0)) {
    callback();
  }
  
  // 컴포넌트가 언마운트될 때 실행되는 cleanup 함수 (이 예시에서는 빈 함수)
  return () => {};
}

// 사용 예시
function ExampleComponent() {
  useEffect(() => {
    console.log('Component mounted or updated');
    
    // 예: 데이터 불러오기, 타이머 설정 등
  }, []);
  
  useEffect(() => {
    console.log('Component mounted or updated when count changes');
    
    // 예: 데이터 불러오기, 타이머 설정 등
  }, [count]);

  return <div>Example Component</div>;
}
```

위의 코드에서 useEffect 함수를 정의했습니다. 
이 함수는 콜백 함수와 의존성 배열을 받아와서, 의존성이 변경될 때마다 콜백을 실행합니다. 
이 예시에서는 의존성이 변경되지 않으면 컴포넌트가 마운트될 때 한 번만 실행됩니다.

이러한 Custom Hook을 사용하면 함수형 컴포넌트에서도 상태와 효과를 관리할 수 있습니다. 
그러나 이것은 React의 내장 기능이 아니므로 사용할 때에는 주의해야 합니다.

# export

JavaScript에서 한 파일에서 여러 개의 값을 export하는 방법은 다음과 같이 할 수 있습니다:

1. Named Exports (이름 있는 내보내기):

여러 개의 값 또는 함수를 내보내려면, 각각에 이름을 지정하고 export 문을 사용합니다.

  1. 예를 들어, utils.js 파일에서 두 가지 함수를 export 하는 경우:

```javascript
// utils.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

이렇게 하면 각 함수를 다른 파일에서 import하여 사용할 수 있습니다:

```javascript
// 다른 파일

import { add, subtract } from './utils';

const sum = add(5, 3); // 8
const difference = subtract(5, 3); // 2
```

2. Default Export (기본 내보내기)와 Named Exports 함께 사용:

한 파일에서 기본 export와 여러 개의 이름 있는 export를 함께 사용할 수도 있습니다.

  1. 예를 들어, utils.js 파일에서 기본 export와 추가적인 함수들을 내보내는 경우:

```javascript
// utils.js

export default function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}
```

이렇게 하면 기본 export는 하나만 가능하며, 다른 파일에서는 중괄호 없이 import 할 수 있습니다:

```javascript
// 다른 파일

import multiply, { divide } from './utils';

const product = multiply(5, 3); // 15
const quotient = divide(6, 2); // 3
```

이처럼 JavaScript에서는 다양한 내보내기 방법을 사용하여 여러 개의 값을 export할 수 있습니다.

# Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'title')

이 오류는 어떤 객체나 변수의 속성을 읽으려고 했지만 해당 객체나 변수가 정의되지 않았을 때 발생합니다.

예를 들어, 다음과 같은 코드에서 오류가 발생할 수 있습니다:

```javascript
const myObject = {
  name: "John"
};

console.log(myObject.title); // Uncaught TypeError: Cannot read properties of undefined (reading 'title')
```

이 경우 myObject에는 title이라는 속성이 정의되어 있지 않기 때문에 오류가 발생합니다.

해결 방법은 해당 속성이 정의되어 있는지 확인하는 것입니다. 예를 들어:

```javascript
const myObject = {
  name: "John"
};

if (myObject.title) {
  console.log(myObject.title);
} else {
  console.log("title is not defined");
}
```

만약 이 문제가 비동기 작업 (예: Promise)과 관련이 있다면, Promise 체인에서 중간에 값이 정의되지 않았을 수 있습니다. 
이 경우 해당 값이 정의된 지점을 확인하고, 해당 값이 비동기로 설정되기를 기다려야 합니다.

# <button>에 onclick 넣는 법

HTML의 <button> 요소에 onclick 이벤트를 추가하는 방법은 다음과 같습니다:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Button 예제</title>
</head>
<body>

    <!-- 버튼 요소에 onclick 속성 추가 -->
    <button onclick="myFunction()">클릭하세요</button>

    <!-- 자바스크립트 코드 -->
    <script>
        function myFunction() {
            alert("버튼이 클릭되었습니다!");
        }
    </script>

</body>
</html>
```

위의 예제에서 <button> 요소에 onclick 속성을 추가하여 클릭 이벤트를 설정했습니다. 
이 속성에는 호출하고자 하는 자바스크립트 함수의 이름을 할당합니다.

그리고 아래에 자바스크립트 코드 블록을 작성하여 myFunction 함수를 정의했습니다. 
이 함수는 버튼이 클릭될 때 실행됩니다.

버튼을 클릭하면 "버튼이 클릭되었습니다!" 라는 알림이 나타날 것입니다.

또한, 이벤트 리스너를 사용하여 자바스크립트 코드에서 이벤트를 처리하는 방법도 있습니다. 
이 방법은 더 복잡한 상황에서 더욱 유용할 수 있습니다.

# CSS linear-gradient()란?

이 함수는 두 개 이상의 색상을 선형으로 그라데이션(Gradient) 형태로 배경에 적용합니다.

여기서 linear-gradient 함수는 다음과 같은 구조를 가지고 있습니다:

```css
div {
  linear-gradient(direction, color-stop1, color-stop2, ...);
}
```

여기서 각 매개변수의 의미는 다음과 같습니다:

1. direction
그라데이션의 방향을 나타내는 값입니다. 
예를 들어, 180deg는 아래에서 위로 그라데이션을 나타냅니다.

2. color-stop1, color-stop2, ...
그라데이션 중간에 사용될 색상들을 나타냅니다. 

주로 그라데이션 배경은 웹 페이지에서 그림자 효과나 부드러운 색상 변화 등을 만들 때 사용됩니다.

# css !important

!important는 CSS 규칙을 강제로 우선시하도록 하는 특별한 규칙입니다.

일반적으로 CSS 스타일은 우선순위에 따라 적용됩니다. 
예를 들어, 같은 속성을 다양한 규칙에서 정의했을 때, 우선 순위가 높은 규칙이 적용됩니다.

!important는 이러한 기본 규칙을 무시하고, 해당 규칙을 강제로 적용하도록 합니다. 
즉, 다른 모든 규칙보다 우선시됩니다.

!important는 필요한 경우에만 사용하는 것이 좋습니다. 
지나치게 남발하면 코드를 유지보수하기 어려워질 수 있습니다. 
따라서 가능하면 !important를 사용하지 않고 규칙의 우선순위를 명확하게 정의하는 것이 좋습니다.

# @parcel/core: No transformers found for src/public/videos/disney.mp4.

```bash
🚨 Build failed. 

@parcel/core: No transformers found for src/public/videos/disney.mp4.

  /Users/kimjiyeong/Desktop/movie-search/node_modules/@parcel/config-default/index.json:3:3
     2 |   "bundler": "@parcel/bundler-default",
  >  3 |   "transformers": {
  >    |   ^^^^^^^^^^^^^^^^^
  >  4 |     "types:*.{ts,tsx}": ["@parcel/transformer-typescript-types"],
  >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  >  5 |     "bundle-text:*": ["...", "@parcel/transformer-inline-string"],
  >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  >  6 |     "data-url:*": ["...", "@parcel/transformer-inline-string"],
  >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  >  7 |     "worklet:*.{js,mjs,jsm,jsx,es6,cjs,ts,tsx}": [
  >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  >  8 |       "@parcel/transformer-worklet",
  >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  >  9 |       "..."
  >    | ^^^^^^^^^^^
  > 10 |     ],
  >    | ^^^^^^
  > 11 |     "*.{js,mjs,jsm,jsx,es6,cjs,ts,tsx}": [
  >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  > 12 |       "@parcel/transformer-babel",
  >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  > 13 |       "@parcel/transformer-js",
  >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

이 오류는 Parcel 번들러에서 비디오 파일에 대한 변환기(transformer)가 발견되지 않아 발생하는 것입니다.

일반적으로 Parcel은 JavaScript, CSS, 이미지 등의 파일을 자동으로 처리하는데, 비디오 파일은 디폴트로 처리되지 않습니다. 
따라서 별도의 설정이 필요합니다.

비디오 파일을 처리하기 위해서는 Parcel에서 지원하는 플러그인을 사용하거나, .parcelrc 또는 package.json 파일에서 특별한 설정을 추가해야 할 수 있습니다.

예를 들어, @parcel/transformer-video 플러그인을 사용하여 비디오 파일을 처리할 수 있습니다.

먼저, 필요한 패키지를 설치합니다:

```bash
npm install @parcel/transformer-video --save-dev
```

다음으로, 프로젝트 루트에 .parcelrc 파일을 만들고 다음과 같이 설정합니다:

```javascript
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{mp4,webm,ogg}": ["@parcel/transformer-video"]
  }
}
```

이렇게 하면 Parcel이 mp4, webm 및 ogg 형식의 비디오 파일을 처리할 수 있습니다.

만약 이미 package.json 파일이 있다면, package.json 파일에 아래와 같이 설정할 수도 있습니다:

```javascript
"parcel": {
  "transformers": {
    "*.{mp4,webm,ogg}": ["@parcel/transformer-video"]
  }
}
```

비디오 파일을 정적 리소스로 다루기:

Parcel에서 비디오 파일을 정적 리소스로 간주하도록 설정할 수 있습니다. 
이를 위해 프로젝트의 .parcelrc 파일 또는 package.json 파일에서 다음과 같이 설정합니다:

.parcelrc 파일:

```javascript
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.mp4": ["@parcel/transformer-raw"]
  }
}
```
또는 package.json 파일:

```javascript
Copy code
"parcel": {
  "transforms": {
    "*.mp4": "@parcel/transformer-raw"
  }
}
```
이렇게 하면 Parcel이 mp4 파일을 정적 리소스로 처리합니다.

설정 후에는 다시 빌드를 시도해보세요.

# Cannot find module '../../public/videos/disney.mp4' or its corresponding type declarations.
이 오류는 모듈을 찾을 수 없다는 것을 나타냅니다. 일반적으로 파일 경로가 올바르게 지정되었는지 확인해야 합니다.

해결 방법:

1. 파일 경로 확인
'../../public/videos/disney.mp4' 경로가 정확한지 다시 한 번 확인하세요. 
파일이 실제로 해당 위치에 있는지 확인하십시오.

2. 파일 확장자 확인
파일 확장자가 .mp4인지 확인하세요. 
만약 다른 확장자를 사용하고 있다면 해당 확장자로 수정해야 합니다.

3. TypeScript 환경인 경우
TypeScript 프로젝트인 경우, disney.mp4 파일에 대한 타입 선언이 필요할 수 있습니다. 
이 경우 타입 선언 파일을 제공하거나, 해당 파일을 사용하는 코드에서 타입을 정의해야 합니다.

4. 파일이 실제로 존재하는지 확인
파일이 실제로 해당 위치에 존재하는지 확인하고, 올바른 경로로 참조되었는지 다시 한 번 확인하세요.

5. 파일이 올바른 위치에 있는지 확인
../../public/videos/disney.mp4 경로가 올바른지 확인하고, 파일이 실제로 그 위치에 있는지 다시 한 번 확인하세요.

6. 파일이 제대로 위치에 배치되었는지 확인
파일이 올바른 위치에 있는지 확인하고, 파일이 제대로 배치되었는지 확인하세요.

만약 이러한 단계를 따라도 문제가 해결되지 않는다면, 더 자세한 도움을 얻기 위해서는 프로젝트의 전반적인 구성과 사용된 도구들에 대한 추가 정보가 필요합니다.

# npm ERR! 404 Not Found - GET https://registry.npmjs.org/@parcel%2ftransformer-video - Not found
```bash
kimjiyeong@gimjiyeong-ui-Macmini movie-search % npm i @parcel/transformer-video -D
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/@parcel%2ftransformer-video - Not found
npm ERR! 404 
npm ERR! 404  '@parcel/transformer-video@*' is not in this registry.
npm ERR! 404 
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/kimjiyeong/.npm/_logs/2023-10-01T08_28_24_378Z-debug-0.log
```

이 오류는 @parcel/transformer-video 패키지를 npm 레지스트리에서 찾을 수 없다는 것을 나타냅니다. 
이러한 경우에는 해당 패키지가 npm 레지스트리에 등록되어 있지 않거나 이름이 올바르게 입력되지 않은 것일 수 있습니다.

알려진 이슈로, 현재로서는 @parcel/transformer-video 패키지가 공식 npm 레지스트리에 존재하지 않는 것으로 파악됩니다.

대신, 비디오 파일을 Parcel에서 처리하려면 별도의 설정 없이도 가능합니다. 

다음과 같이 시도해보세요:

1. 파일 경로 확인
먼저 ../../public/videos/disney.mp4 경로가 정확한지 다시 한 번 확인하세요.

2. Parcel 설정 확인
.parcelrc 파일이나 package.json 파일의 parcel 설정에 대해 다시 한 번 검토해보세요.

만약 이러한 단계로 문제를 해결할 수 없다면, 프로젝트의 전반적인 구성과 사용된 도구들에 대한 추가 정보가 필요할 것입니다.

# parcel 설정 확인

Parcel 설정을 검토하는 방법은 다음과 같습니다:

1. .parcelrc 파일 확인:
프로젝트의 루트 디렉토리에 .parcelrc 파일이 있는지 확인하세요. 
이 파일은 Parcel의 설정을 저장하는 파일입니다. 
파일이 존재한다면 그 안의 설정을 확인합니다.

2. package.json 파일 확인:
만약 .parcelrc 파일이 없다면, package.json 파일에서 Parcel 설정을 확인할 수 있습니다. 
package.json 파일 내에 "parcel" 섹션을 확인하고, 그 안에 설정이 있는지 확인하세요.

```javascript
"parcel": {
  "transformers": {
    "*.{mp4,webm,ogg}": ["@parcel/transformer-video"]
  }
}
```

1. 파일 경로 확인:
비디오 파일의 경로가 올바른지 다시 한 번 확인하세요. 
경로가 정확하지 않다면 파일을 올바른 위치로 이동하거나 경로를 수정해야 합니다.

2. 패키지 의존성 확인:
프로젝트의 package.json 파일에서 사용 중인 Parcel 버전과 관련된 패키지가 제대로 설치되어 있는지 확인합니다. 
만약 패키지가 누락되어 있다면, 해당 패키지를 설치합니다.

예를 들어:

```bash
npm install parcel@버전
```

3. Parcel 버전 확인:
현재 프로젝트에서 사용 중인 Parcel 버전이 최신 버전인지 확인합니다. 만약 오래된 버전을 사용 중이라면 업데이트를 고려할 수 있습니다.

```bash
npm outdated parcel
```

위의 단계들을 따라서 Parcel 설정을 검토하고, 문제를 해결할 수 있도록 노력해보세요.

# Parcel Build
프로젝트를 빌드하는 방법은 프로젝트의 환경에 따라 다를 수 있습니다. 가장 일반적인 방법은 다음과 같습니다:

1. Parcel 프로젝트의 경우:

Parcel 프로젝트인 경우, 터미널 또는 명령 프롬프트에서 다음 명령어를 실행합니다:

```bash
npx parcel build index.html
```

여기서 index.html은 프로젝트의 엔트리 파일을 나타냅니다. 
필요에 따라 엔트리 파일의 이름을 변경할 수 있습니다.

2. 다른 번들러를 사용하는 경우:

다른 번들러를 사용하는 경우에는 해당 번들러의 빌드 명령어를 사용합니다. 
예를 들어, Webpack을 사용하는 경우:

```bash
npx webpack
```

또는, Gulp를 사용하는 경우 Gulp의 빌드 태스크를 실행합니다.

3. 특정 프레임워크나 라이브러리의 빌드 스크립트:

일부 프레임워크나 라이브러리는 자체의 빌드 스크립트나 명령어를 제공합니다. 
이 경우 해당 프레임워크나 라이브러리의 문서를 참조하여 빌드 방법을 확인하세요.

4. 사용 중인 IDE 또는 코드 에디터에서 빌드:

많은 IDE나 코드 에디터에서는 프로젝트를 빌드하는 기능을 제공합니다. 
예를 들어, Visual Studio Code에서는 터미널을 열고 npm run build 또는 yarn build 명령어를 실행할 수 있습니다.

이러한 방법 중 하나를 선택하여 프로젝트를 빌드하면, 소스 코드가 번들링되고 최종 빌드 파일이 생성됩니다. 
이 파일은 보통 dist 또는 build 폴더에 저장됩니다.

# Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring pattern.

이 에러 메시지는 일반적으로 JavaScript에서 객체를 생성하거나 수정할 때 구문 오류가 발생했을 때 나타납니다. 
이 메시지는 주로 = 대신 :을 사용해야 할 곳에서 =을 사용했을 때 나타납니다.

예를 들어, 객체를 생성하거나 수정할 때는 다음과 같은 구문을 사용해야 합니다:

```javascript
// 올바른 객체 생성
const myObject = {
  propertyName: 'propertyValue'
};

// 객체의 속성 수정
myObject.propertyName = 'newValue';
```

하지만 아래와 같이 =을 사용하는 경우에는 에러가 발생합니다:

```javascript
const myObject = {
  propertyName = 'propertyValue' // 에러 발생
};
```
이 경우 올바른 구문은 :을 사용하는 것입니다:

```javascript
const myObject = {
  propertyName: 'propertyValue' // 올바른 구문
};
```
따라서 에러 메시지에서 말하는 것은 객체를 생성하거나 수정할 때 = 대신 :을 사용해야 한다는 것입니다.

# @parcel/core: Failed to resolve 'swiper/css' from './src/js/components/row.ts'
```bash
🚨 Build failed.

@parcel/core: Failed to resolve 'swiper/css' from './src/js/components/row.ts'

  /Users/kimjiyeong/Desktop/movie-search/src/js/components/row.ts:2:8
    1 | import { IRowMovie } from "../../types/main"
  > 2 | import 'swiper/css'
  >   |        ^^^^^^^^^^^^
    3 | import "swiper/css/navigation";
    4 | import "swiper/css/scrollbar";

@parcel/resolver-default: Cannot load file './css' from module 'swiper'
```

import 'swiper/css' 구문은 Swiper 라이브러리의 CSS 파일을 불러오는데 사용됩니다. 
그러나 현재 프로젝트에서는 해당 파일을 찾을 수 없어 빌드가 실패합니다.

이 문제를 해결하려면 다음과 같은 단계를 따르십시오:

1. Swiper 라이브러리 설치:

Swiper 라이브러리를 설치합니다. 터미널에서 프로젝트 디렉토리로 이동한 후 다음 명령어를 실행합니다:

```bash
npm install swiper
```

2. Swiper CSS 파일 불러오기 수정:

row.ts 파일에서 Swiper CSS 파일을 불러오는 부분을 수정합니다. 
다음과 같이 수정해보세요:

```javascript
import 'swiper/swiper-bundle.css'
```

이렇게 하면 Swiper 라이브러리의 CSS 파일이 로드될 것입니다.

3. 다시 빌드:

수정된 코드를 저장하고 프로젝트를 다시 빌드합니다.

이러한 단계를 따르면 Swiper 라이브러리의 CSS 파일이 정상적으로 불러와지고 빌드가 성공할 것입니다.

# Property 'id' does not exist on type 'EventTarget'.

```javascript
// 윈본 코드
swiperWrap?.addEventListener('click', (event) => {
  if(event.target) {
    console.log(event.target.id)
  }
})
```

이 에러는 TypeScript에서 이벤트 객체의 타입을 명시하지 않아서 발생하는 것으로 보입니다. 
이벤트 객체는 target 프로퍼티를 가지고 있지만 TypeScript에서는 이를 인식하지 못하기 때문에 발생하는 문제입니다.

해결 방법으로는 다음과 같이 이벤트 객체의 타입을 명시해주면 됩니다:

```javascript
// 수정 코드
swiperWrap?.addEventListener('click', (event: MouseEvent) => {
    if(event.target) {
        console.log((event.target as HTMLElement).id);
    }
});
```

위 코드에서는 이벤트 타입을 MouseEvent로 명시하고, event.target의 타입을 HTMLElement로 캐스팅하여 사용합니다. 
이렇게 하면 TypeScript에서 id 프로퍼티를 올바르게 인식할 수 있습니다.

# Uncaught (in promise) SyntaxError: Unexpected end of JSON input

이 에러는 JSON 형식의 문자열을 파싱하려고 할 때 문자열이 유효한 JSON이 아닌 경우 발생합니다.

가장 일반적인 이유는 서버에서 반환한 JSON 데이터가 비어 있거나 올바른 JSON 형식이 아닐 때 발생합니다.

해결하기 위해 다음을 확인하세요:

1. 서버 응답 확인: 서버에서 올바른 JSON 데이터를 반환하는지 확인합니다. 응답이 비어 있지 않고 올바른 JSON 형식이어야 합니다.

2. 네트워크 탭 확인: 브라우저의 개발자 도구에서 네트워크 탭을 열어 해당 요청과 응답을 확인하세요. 응답이 예상대로 오는지 확인하고 데이터가 올바른 JSON 형식인지 확인하세요.

3. 파싱 전에 데이터 확인: JSON 파싱을 하기 전에 서버 응답을 로그로 출력하여 데이터가 정상적으로 받아졌는지 확인하세요.

4. 예외 처리 추가: JSON 파싱 시에 예외 처리를 추가하여 에러를 방지할 수 있습니다.

예를 들어, 다음과 같이 예외 처리를 추가할 수 있습니다:

```javascript
try {
    const parsedData = JSON.parse(jsonString);
    // 파싱이 성공했을 때 할 일
} catch (error) {
    console.error('JSON 파싱 에러:', error);
}
```

이렇게 하면 JSON 파싱이 실패했을 때 에러가 발생하지 않고 예외 처리 블록으로 넘어갑니다. 
이후 에러 처리를 추가하여 문제를 해결할 수 있습니다.

# CSS inset

inset은 CSS의 속성 중 하나로, 요소의 위치나 그림자 등을 지정할 때 사용됩니다. 
inset은 다음과 같은 속성에서 사용될 수 있습니다:

1. box-shadow: 그림자를 요소에 추가할 때 사용됩니다. inset 키워드를 사용하면 그림자가 요소 안쪽에 위치합니다.
예시:
```css
box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1);
```

2. inset-inline-start, inset-inline-end, inset-block-start, inset-block-end: Flexbox나 Grid 레이아웃을 사용할 때, 요소의 안쪽 여백을 지정합니다.
예시:
```css
inset-inline-start: 10px;
```

이렇게 사용하면 요소의 시작 부분(가로 방향의 시작)에서 안쪽 여백이 10px로 지정됩니다.

3. position: 요소의 위치를 지정할 때 사용됩니다. inset 키워드를 사용하면 요소가 부모 요소의 안쪽에 위치합니다.
예시:
```css
position: absolute;
inset: 10px 20px 30px 40px; /* top right bottom left */
```

이렇게 사용하면 요소가 top에서 10px, right에서 20px, bottom에서 30px, left에서 40px 떨어진 위치에 위치합니다.

inset은 주로 그림자나 위치 등을 지정할 때 사용되며, 요소의 위치를 더 정확하게 조절하는 데 활용됩니다.

# CSS @media(){} 과 @media screen and (){} 의 차이

@media 쿼리를 사용하여 스타일을 조건부로 적용할 수 있습니다. 
그 중에서도 @media ()과 @media screen and ()은 비슷하지만 약간의 차이가 있습니다.

1. @media () {}:

이 쿼리는 미디어 타입을 명시하지 않습니다.
즉, 모든 미디어 타입에 적용됩니다.
이러한 쿼리는 프린트 스타일이나 화면, 휴대폰 화면 등 모든 미디어에 적용할 수 있습니다.

2. @media screen and () {}:

@media screen은 스크린 미디어 타입을 나타냅니다. 
즉, 화면이 있는 디바이스에 스타일을 적용합니다.
주요 차이점은 @media 블록 내에서 스타일이 어떤 미디어 타입에 적용되는지 여부입니다. 
첫 번째 경우에는 모든 미디어에 적용되지만, 두 번째 경우에는 화면 미디어에만 적용됩니다. 
대부분의 경우 @media screen을 사용하여 화면에 대한 스타일을 정의하게 됩니다.

# CSS align-items: unset;
```css
align-items: unset;
```
은 CSS에서 Flexbox 컨테이너의 자식 요소들을 수직으로 정렬할 때 사용되는 속성입니다.

unset: 이 값은 속성을 부모 요소로부터 상속받지 않도록 설정합니다. 
만약 부모 요소에서 어떤 값이 지정되어 있지 않다면, 브라우저의 기본값이 적용됩니다.

따라서 align-items: unset;은 부모 요소로부터 align-items 속성을 상속받지 않도록 설정하는 것입니다. 
이 경우에는 부모 요소에서 지정된 값이 없다면, 브라우저의 기본값이 적용됩니다.

# VM7494:1 Uncaught (in promise) SyntaxError: Unterminated string in JSON at position 399 (line 1 column 400)

이 에러는 JSON 데이터가 유효하지 않아서 발생하는 것으로 보입니다. 
JSON 형식이 잘못되었을 가능성이 있습니다.

JSON 형식은 특정한 구조를 가져야하며, 따옴표와 쉼표 등을 올바르게 사용해야 합니다.

가장 일반적인 원인은 다음과 같습니다:

1. JSON 형식이 맞지 않음: JSON 데이터가 예상과 다르게 구성되어 있을 수 있습니다. 문법 오류를 확인하세요.

2. 문자열이 닫히지 않음: 따옴표나 큰따옴표로 감싸진 문자열이 닫히지 않았을 수 있습니다.

3. JSON 데이터가 비어 있음: 아무런 데이터가 포함되어 있지 않은 경우에도 이 에러가 발생할 수 있습니다.

JSON 데이터를 확인하고 유효한 형식으로 구성되어 있는지 다시 한 번 확인해 보세요. 
JSON 형식이 유효하다면 위치 399에서 어떤 문제가 있는지 확인해 보십시오.