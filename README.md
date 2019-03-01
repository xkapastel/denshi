# Magic Word
<a href="https://liberapay.com/xkapastel/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a> [![ko-fi](https://www.ko-fi.com/img/donate_sm.png)](https://ko-fi.com/T6T5QRUW)

An experimental [programming
system](https://www.dreamsongs.com/Files/Incommensurability.pdf) that
combines modern research in programming languages and artificial
intelligence. Typed, purely functional concatenative code for
scripting the web — and others! With deep learning! 🚀

## Contents
- [About](#about)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [License](#license)

## About
Magic Word is a collection of compilers and services written in F# and
running on .NET Core. The focus is on the creation of documents and
applications that run on the web platform. The common theme between
these programs is the use of **ABC**, a purely functional bytecode
designed for livecoding and program synthesis.

`magic-word.sln` is a .NET solution containing a number of projects:

* `MagicWord.Lang` implements evaluation and synthesis of the purely
  functional bytecode, known as ABC, that powers the Magic Word
  project. Its unique feature is its *rewriting* semantics, that
  allows programs to be paused, migrated, and resumed at arbitrary
  points during execution.
  
  The Magic Word project takes the view that programming language
  theory should embrace techniques based on statistics as well as
  logic. Accordingly, `MagicWord.Lang` also implements *neural
  language models* trained on selected corpuses of ABC code. These
  models are used for program synthesis, taking inspiration from
  several recent developments in machine learning, such as [Language
  Models are Unsupervised Multitask
  Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language-models.pdf)
  and [Neural Program Synthesis with Priority Queue
  Training](https://arxiv.org/abs/1801.03526).

* `MagicWord.Web` implements a web server that allows collaborative
  community development of ABC programs.
  
* `MagicWord.Media` implements conversions between ABC and various
  multimedia formats: audio, images, video and so on. A typical
  example is a function from infinite, continuous two dimensional
  space to some color space being interpreted as an image (e.g. `R^2
  -> R^4`).

## Getting Started
`dotnet build` at the top-level will build all projects. At the moment
Magic Word is vaporware, but some time real soon, `dotnet run
--project ./src/MagicWord.Web` will start the web server, which will
walk you through further configuration and usage.

## Documentation
Documentation created with mdBook is available on [GitHub
Pages](https://xkapastel.github.io/magic-word).

## License
Magic Word is available under the terms of the GNU Affero General
Public License, version 3; see the `LICENSE` file for details.
