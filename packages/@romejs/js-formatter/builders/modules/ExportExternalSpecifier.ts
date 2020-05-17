/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from "../../Builder";
import {Token} from "../../tokens";
import {ExportExternalSpecifier} from "@romejs/js-ast";
import ExportLocalSpecifier from "./ExportLocalSpecifier";

export default function ExportExternalSpecifier(
	builder: Builder,
	node: ExportExternalSpecifier,
): Token {
	return ExportLocalSpecifier(builder, node);
}
