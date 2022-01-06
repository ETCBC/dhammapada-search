const configData = {
 "memSavingMethod": 0,
 "mainConfig": {
  "description": {
   "simple": "<div id=\"title\">etcbc/dhammapada-text search</div>",
   "full": "<details id=\"titledetails\">\n  <summary id=\"title\">etcbc/dhammapada-text search</summary>\n  <div id=\"description\"></div>\n  <a\n     id=\"makerlink\" href=\"#\"\n     class=\"logo right\"\n  ><img alt=\"maker logo\" id=\"logo\" src=\"png/maker.png\"></a>\n  <a\n     id=\"tflink\" href=\"#\"\n     class=\"logo right\"\n  ><img alt=\"Text-Fabric logo\" id=\"logo\" src=\"png/tf.png\"></a>\n  <details>\n    <summary><i>open source</i></summary>\n    <div>\n      <p>You can\n      <a id=\"packagelink\" href=\"#\"></a>\n      this web page and use it offline\n      by unzipping and double clicking <i>text-local.html</i>.\n      </p>\n      <p>This app is generated by <a id=\"generatorlink\" href=\"#\"></a>\n      based on a configuration in <a id=\"sourcelink\" href=\"#\"></a>.\n      </p>\n      <p>Written by: <a id=\"authorlink\" href=\"#\" ></a>.\n      <p>License: <a id=\"licenselink\" href=\"#\" ></a>\n      (you are free to use and modify the code).\n      </p>\n    </div>\n  </details>\n</details>"
  },
  "jobs": {
   "simple": "",
   "full": "<div id=\"jobs\">\n  <input\n    type=\"file\" name=\"imjname\" id=\"imjname\"\n    accept=\"application/json\"\n    class=\"import\"\n  >\n  <button\n    type=\"button\" class=\"medium active\" id=\"importj\"\n    title=\"import job from file\"\n  >↑</button>\n  <button\n    type=\"button\" class=\"medium active\" id=\"deletej\"\n    title=\"delete current job\"\n  >-</button>\n  <select class=\"selinp\" id=\"jchange\"></select>\n  <button\n    type=\"button\" class=\"medium active\" id=\"newj\"\n    title=\"fresh new job\"\n  >+</button>\n  <button\n    type=\"button\" class=\"medium active\" id=\"renamej\"\n    title=\"rename current job\"\n  >→</button>\n  <button\n    type=\"button\" class=\"medium active\" id=\"dupj\"\n    title=\"duplicate current job\"\n  >++</button>\n  <button\n    type=\"button\" class=\"medium active\" id=\"exportj\"\n    title=\"export job to file\"\n  >↓</button>\n</div>"
  },
  "provenance": {
   "simple": "<table>\n  <tbody>\n    <tr>\n      <td>help</td>\n      <td><a id=\"lsdocsimplelink\" href=\"#\"></a></td>\n    </tr>\n    <tr>\n      <td>data version</td>\n      <td><a id=\"datalink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>app version</td>\n      <td><span id=\"appversion\"></span></td>\n    </tr>\n  </tbody>\n</table>",
   "full": "<table>\n  <tbody>\n    <tr>\n      <td>help</td>\n      <td><a id=\"lsdoclink\" href=\"#\"></a> ; <a id=\"cheatsheetlink\" href=\"#\"></a></td>\n    </tr>\n    <tr>\n      <td>writing</td>\n      <td><a id=\"writinglink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>docs</td>\n      <td><a id=\"datadoclink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>related</td>\n      <td><a id=\"relatedlink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>data version</td>\n      <td><a id=\"datalink\" href=\"#\"></a> </td>\n    </tr>\n    <tr>\n      <td>app version</td>\n      <td><span id=\"appversion\"></span></td>\n    </tr>\n  </tbody>\n</table> <p><a id=\"issuelink\" href=\"#\" class=\"medium active\"></a>\n  please copy the version above this line\n</p>"
  }
 },
 "defs": {
  "lsVersion": "v087@2022-01-06T08:49:16",
  "client": "text",
  "org": "etcbc",
  "repo": "dhammapada",
  "urls": {
   "cheatsheet": [
    "regexp cheatsheet",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet",
    "cheatsheet of regular expressions"
   ],
   "license": [
    "MIT",
    "https://mit-license.org",
    "website of MIT license"
   ],
   "maker": [
    null,
    "https://dans.knaw.nl/en/front-page?set_language=en",
    "Website of DANS = Data Archiving and Networked Services"
   ],
   "corpus": [
    null,
    "https://github.com/etcbc/dhammapada/blob/master/docs/about.md",
    "About the Dhammapada corpus"
   ],
   "corpus2": [
    "Dhammapada Latine",
    "https://github.com/etcbc/dhammapada/blob/master/docs/about.md",
    "About the Dhammapada corpus"
   ],
   "author": [
    "Dirk Roorda",
    "https://pure.knaw.nl/portal/en/persons/dirk-roorda",
    "profile of the author"
   ],
   "author1": [
    "Bee Scherer and Yvonne Mataar",
    "https://research.vu.nl/en/persons/bee-scherer",
    "lead researcher"
   ],
   "author2": [
    "Dirk Roorda",
    "https://pure.knaw.nl/portal/en/persons/dirk-roorda",
    "data modeler"
   ],
   "tf": [
    null,
    "https://annotation.github.io/text-fabric/tf",
    "Text-Fabric documentation website"
   ],
   "lsdoc": [
    "user manual (full)",
    "https://annotation.github.io/text-fabric/tf/about/clientmanual.html",
    "user manual for the full search interface"
   ],
   "lsdocsimple": [
    "user manual (simple)",
    "https://annotation.github.io/text-fabric/tf/about/manual.html",
    "user manual for the simplified search interface"
   ],
   "datadoc": [
    "data (feature) documentation",
    "https://github.com/etcbc/dhammapada/blob/master/docs/transcription.md",
    "explanation of the features in the dataset"
   ],
   "data": [
    "based on text-fabric data version 0.2",
    "https://github.com/etcbc/dhammapada/tree/master/tf/0.2",
    "online repository of the underlying text-fabric data"
   ],
   "generator": [
    "text-fabric/client",
    "https://annotation.github.io/text-fabric/tf/client/make/build.html",
    "the generator of this search interface"
   ],
   "source": [
    "dhammapada-search",
    "https://github.com/etcbc/dhammapada-search/tree/master/layeredsearch",
    "source code of the definition of this search interface"
   ],
   "issue": [
    "Report an issue",
    "https://github.com/etcbc/dhammapada-search/issues",
    "report issues"
   ],
   "package": [
    "download",
    "../text.zip",
    "zip file for offline use"
   ],
   "writing": [
    "",
    "https://annotation.github.io/text-fabric/tf/writing/.html",
    "characters and transliteration for "
   ],
   "related": [
    "text-fabric etcbc/dhammapada",
    "https://nbviewer.jupyter.org/github/etcbc/dhammapada/tree/master/tutorial/start.ipynb",
    "using Text-Fabric on the same corpus"
   ]
  },
  "description": "<p>Search interface for <a id=\"corpus2link\" href=\"#\"></a>.</p> <p>This search interface is by:</p> <ul>\n    <li><a id=\"author2link\" href=\"#\"></a> (data modeler)\n    <li><a id=\"author1link\" href=\"#\"></a> (lead researcher and text coder)\n</ul>"
 },
 "ntypes": [
  "word",
  "stanza",
  "vagga"
 ],
 "typesLower": {
  "word": [
   "word"
  ],
  "stanza": [
   "word",
   "stanza"
  ],
  "vagga": [
   "word",
   "stanza",
   "vagga"
  ]
 },
 "defaultSettings": {
  "autoexec": true,
  "nodeseq": true,
  "exporthl": true,
  "exportsr": true,
  "multihl": true,
  "simple": false
 },
 "defaultFlags": {
  "i": false,
  "m": true,
  "s": false
 },
 "keyboard": {
  "ā": "-a",
  "â": "^a",
  "ḍ": ".d",
  "ê": "^e",
  "ḥ": ".h",
  "ī": "-i",
  "î": "^i",
  "ḷ": ".l",
  "ṃ": ".m",
  "ṅ": ":n",
  "ṇ": ".n",
  "ñ": "~n",
  "ȏ": "^o",
  "ṭ": ".t",
  "ū": "-u"
 },
 "focusType": "stanza",
 "ntypesinit": {
  "word": 1,
  "stanza": 16164,
  "vagga": 16639
 },
 "ntypessize": {
  "word": 12922,
  "stanza": 475,
  "vagga": 26
 },
 "dtypeOf": {
  "stanza": "word",
  "vagga": "stanza"
 },
 "utypeOf": {
  "word": "stanza",
  "stanza": "vagga"
 },
 "visible": {
  "word": {
   "pali": false,
   "latin": false
  },
  "stanza": {
   "number": true,
   "pali": true,
   "latin": true
  },
  "vagga": {
   "number": true
  }
 },
 "levels": {
  "word": "words (Pali and Latin separately)",
  "stanza": "stanzas (Pali and Latin linked)",
  "vagga": "Vaggas."
 },
 "layers": {
  "word": {
   "pali": {
    "valueMap": null,
    "tip": false,
    "pos": "pali",
    "pattern": "",
    "description": "Pali original"
   },
   "latin": {
    "valueMap": null,
    "tip": false,
    "pos": "latin",
    "pattern": "",
    "description": "Latin translation"
   }
  },
  "stanza": {
   "number": {
    "valueMap": null,
    "tip": false,
    "pos": "number",
    "pattern": "",
    "description": "number of a stanza"
   },
   "pali": {
    "valueMap": null,
    "tip": false,
    "pos": "pali",
    "pattern": "",
    "description": "Pali original"
   },
   "latin": {
    "valueMap": null,
    "tip": false,
    "pos": "latin",
    "pattern": "",
    "description": "Latin translation"
   }
  },
  "vagga": {
   "number": {
    "valueMap": null,
    "tip": false,
    "pos": "number",
    "pattern": "",
    "description": "number of a vagga"
   }
  }
 }
}