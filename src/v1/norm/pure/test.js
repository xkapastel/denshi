// This file is a part of Denshi.
// Copyright (C) 2019 Matthew Blount

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public
// License along with this program.  If not, see
// <https://www.gnu.org/licenses/.

import assert from "../../assert.js";
import norm from "./norm.js";

export default () => {
  let tests = {
    "[foo] [bar] a": "bar [foo]",
    "[foo] [bar] b": "[[foo] bar]",
    "[foo] c": "[foo] [foo]",
    "[foo] d": "",
    "[foo] s bar r": "[bar] foo",
    "1 2 +": "3",
    "2 3 *": "6",
    "1 -": "-1",
    "2 /": "0.5",
    "2 3 &": "2",
    "2 3 |": "3",
    "2.5 !": "2",
    "2.5 ?": "3",
  }
  for (let [src, expected] of Object.entries(tests)) {
    console.log(`norm: test: ${src} = ${expected}`);
    const actual = norm(src);
    assert(expected === actual, `expected\n${expected}\nbut got\n${actual}`);
  }
}
