"use strict";(self.webpackChunkdokku_website=self.webpackChunkdokku_website||[]).push([[838],{4351:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/\uc774\ubbf8\uc9c0 \ucc98\ub9ac_Image_Processing","metadata":{"permalink":"/blog/\uc774\ubbf8\uc9c0 \ucc98\ub9ac_Image_Processing","editUrl":"https://github.com/asthtls/dokku-website/edit/main/blog/\uc774\ubbf8\uc9c0 \ucc98\ub9ac_Image_Processing.md","source":"@site/blog/\uc774\ubbf8\uc9c0 \ucc98\ub9ac_Image_Processing.md","title":"\uc774\ubbf8\uc9c0 \ucc98\ub9ac_Image_Processing","description":"---","date":"2024-05-20T14:29:21.000Z","tags":[],"readingTime":8.21,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"\ucef4\ud4e8\ud130 \ube44\uc804(Computer Vision)","permalink":"/blog/\ucef4\ud4e8\ud130 \ube44\uc804"}},"content":"---\\ntitle: \uc774\ubbf8\uc9c0 \ucc98\ub9ac(Image Processing)\\ndate: 2024-05-20\\npriority: 1\\n---\\n\\n\uc774\ubbf8\uc9c0 \ucc98\ub9ac\ub780\\n\\n- \uc544\ub0a0\ub85c\uadf8 \uc774\ubbf8\uc9c0 \ucc98\ub9ac\uc640 \ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0 \ucc98\ub9ac \ub450 \uac00\uc9c0\ub85c \uad6c\ubd84\\n\\n\uc544\ub0a0\ub85c\uadf8 \uc774\ubbf8\uc9c0 \ucc98\ub9ac \\n\\n- \uc804\ud1b5\uc801\uc778 \ubc29\uc2dd\uc73c\ub85c, \uc8fc\ub85c \ud544\ub984\uc774\ub098 \uc778\ud654\uacfc\uc815\uc5d0\uc11c \ubb3c\ub9ac\uc801 \ub610\ub294 \ud654\ud559\uc801 \uc218\ub2e8\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0\ub97c \uc870\uc791\ud558\uac70\ub098 \ud3b8\uc9d1\ud558\ub294 \ubc29\ubc95\\n- \uc0ac\uc9c4 \ucd2c\uc601 \uc2dc \uce74\uba54\ub77c\uc5d0 \ud2b9\uc815 \ud544\ud130\ub97c \ubd80\ucc29\ud558\uc5ec \ube5b\uc758 \uc870\uc815\ud558\uac70\ub098 \uc0c9\uc0c1 \ubcc0\ud615 ( \uc0c9\uc0c1 \ud544\ud130 \uc0ac\uc6a9\uc2dc \uc0ac\uc9c4\uc758 \uc0c9\uc870 \ubcc0\uacbd \uac00\ub2a5, \ud3f4\ub77c\ub77c\uc774\uc800 \ud544\ud130\ub294 \ubc18\uc0ac\ub418\ub294 \ube5b\uc744 \uac10\uc18c\uc2dc\ucf1c \ub354\uc6b1 \uc120\uba85\ud55c \uc774\ubbf8\uc9c0 \ud68d\ub4dd \uac00\ub2a5)\\n- \ud544\ub984\uc744 \ud2b9\uc815 \ud654\ud559 \uc57d\ud488\uc5d0 \ub2f4\uadf8\uc5b4 \ud604\uc0c1\ud558\uace0, \uc774\ubbf8\uc9c0\uc758 \uba85\uc554\uc774\ub098 \ub300\ube44\ub97c \uc870\uc808 (\uae34 \ud604\uc0c1 \uc2dc\uac04\uc740 \uc774\ubbf8\uc9c0\uac00 \ub354 \uc5b4\ub461\uac8c \ub098\ud0c0\ub098\uac8c \ud558\uc5ec \ub300\ube44\ub97c \ub192\uc77c \uc218 \uc788\uc74c)\\n- \uc778\ud654 \uacfc\uc815\uc5d0\uc11c \uc0ac\uc9c4\uc758 \uc77c\ubd80\ub97c \uac00\ub9ac\uac70\ub098 \ub178\ucd9c \uc2dc\uac04\uc744 \uc870\uc808\ud558\uc5ec \uc774\ubbf8\uc9c0\uc758 \ubc1d\uae30\ub098 \ud2b9\uc815 \ubd80\ubd84\uc758 \uc138\ubd80 \uc0ac\ud56d\uc744 \uc870\uc815\\n\\n\ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0 \ucc98\ub9ac \\n\\n- \ucef4\ud4e8\ud130\uac00 \uc218\ud559\uc801 \uc54c\uace0\ub9ac\uc998\uacfc \uacc4\uc0b0 \uae30\uc220\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0\uc758 \ud53d\uc140 \uac12\uc744 \ubd84\uc11d\ud558\uace0 \uc870\uc791\ud558\ub294 \uacfc\uc815\uc744 \ub9d0\ud55c\ub2e4.  \uc774\ub7ec\ud55c \uacfc\uc815\uc744 \ud1b5\ud574 \uc774\ubbf8\uc9c0\ub97c \ud5a5\uc0c1\ud558\uac70\ub098 \ubd84\uc11d \ubaa9\uc801\uc73c\ub85c \ubcc0\ud658\\n- \uc774\ubbf8\uc9c0 \ud5a5\uc0c1(Image Upscaling) : \uc6d0\ubcf8 \uc774\ubbf8\uc9c0\ub97c \uc0ac\ub78c\uc774 \ub354 \uc27d\uac8c \uc774\ud574\ud558\uac70\ub098 \ud2b9\uc815 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc758 \ubaa9\uc801\uc5d0 \ubd80\ud569\ud558\ub3c4\ub85d \ud488\uc9c8\uc744 \uac1c\uc120\ud558\ub294 \uc791\uc5c5\\n    - \ub178\uc774\uc988 \uc81c\uac70 : \uc774\ubbf8\uc9c0\uc5d0 \uc874\uc7ac\ud558\ub294 \ubd88\ud544\uc694\ud55c \ub178\uc774\uc988\ub97c \uc81c\uac70\ud558\uc5ec \uc774\ubbf8\uc9c0\uc758 \uc120\uba85\ub3c4\ub97c \ub192\uc784\\n        - \uac00\uc6b0\uc2dc\uc548 \ud544\ud130, \ubbf8\ub514\uc5b8 \ud544\ud130, \ud3c9\uade0 \ud544\ud130 \ub4f1\\n    - \ub300\ube44 \ud5a5\uc0c1 : \uc774\ubbf8\uc9c0\uc758 \uc5b4\ub450\uc6b4 \uc601\uc5ed\uacfc \ubc1d\uc740 \uc601\uc5ed\uc744 \ub354 \uba85\ud655\ud558\uac8c \uad6c\ubd84\ud558\uc5ec \ub300\ube44\ub97c \ub192\uc774\ub294 \uc791\uc5c5\\n        - \ud788\uc2a4\ud1a0\uadf8\ub7a8 \ud3c9\ud65c\ud654, \uc5b4\ub311\ud2f0\ube0c \ud788\uc2a4\ud1a0\uadf8\ub7a8 \ud3c9\ud65c\ud654 \ub4f1\\n    - \uc120\uba85\ub3c4 \ud5a5\uc0c1 : \uc774\ubbf8\uc9c0\uc758 \uacbd\uacc4\ub098 \uc138\ubd80 \uc0ac\ud56d\uc744 \uac15\uc870\ud558\uc5ec \ub354 \uc120\uba85\ud558\uac8c \ubcf4\uc774\ub3c4\ub85d \ud568\\n        - \uc5b8\uc0e4\ud504 \ub9c8\uc2a4\ud0b9(Unsharp Masking), \ub77c\ud50c\ub77c\uc2dc\uc548 \ud544\ud130 \ub4f1\\n    - \uc0c9\uc0c1 \uac1c\uc120 : \uc774\ubbf8\uc9c0\uc758 \uc0c9\uc0c1\uc744 \ub354 \ub69c\ub837\ud558\uac8c \ubcf4\uc774\ub3c4\ub85d \uc870\uc815\ud558\ub294 \ubc29\ubc95\\n        - \ucc44\ub3c4, \ubc1d\uae30, \ub300\ube44\ub97c \uc870\uc815, \ud2b9\uc815 \uc0c9 \uc601\uc5ed\uc758 \uc0c9\uc0c1 \ubcc0\uacbd \uc791\uc5c5\\n    - \ud544\ud130\ub9c1 : \ud2b9\uc815 \ud6a8\uacfc\ub098 \uc774\ubbf8\uc9c0\ub97c \ubcc0\ud658\ud558\uae30 \uc704\ud574 \uacf5\uac04 \uc601\uc5ed \ub610\ub294 \uc8fc\ud30c\uc218 \uc601\uc5ed \ud544\ud130\ub97c \uc0ac\uc6a9\\n        - \uc5d0\uc9c0 \uac80\ucd9c(Edge Detection), \ube14\ub7ec(Blur), \uc0e4\ud504\ub2dd(Sharpening) \ub4f1\\n- \uc774\ubbf8\uc9c0 \ubcf5\uc6d0(Image Restoration) : \uc6d0\ubcf8 \uc774\ubbf8\uc9c0\uac00 \ub2e4\uc591\ud55c \uc774\uc720\ub85c \uc190\uc0c1\ub418\uc5c8\uc744 \ub54c, \uac00\ub2a5\ud55c \ud55c \uc6d0\ub798\uc758 \ubaa8\uc2b5\uc744 \ud68c\ubcf5\ud558\ub294 \uac83\uc744 \ubaa9\uc801\\n    - \ub178\uc774\uc988 \uc81c\uac70  : \uc774\ubbf8\uc9c0 \ucd2c\uc601, \uc804\uc1a1 \ub3c4\uc911 \ubc1c\uc0dd\ud55c \ub178\uc774\uc988\ub97c \uc81c\uac70\\n        - \uac00\uc6b0\uc2dc\uc548 \ub178\uc774\uc988, \uc18c\uae08\uacfc \ud6c4\ucd94 \ub178\uc774\uc988 \ub4f1\uc758 \ub178\uc774\uc988 \uc720\ud615\uc5d0 \ub530\ub77c \ud544\ud130 \uc801\uc6a9\\n        - \ubbf8\ub514\uc5b8 \ud544\ud130, \uc704\ub108 \ud544\ud130, \ube4c\ub808\ud130\ub7f4 \ud544\ud130 \ub4f1\uc758 \uae30\ubc95 \uc0ac\uc6a9\\n    - \ube14\ub7ec(Blur) \uc81c\uac70 : \uce74\uba54\ub77c \ud754\ub4e4\ub9bc, \ucd08\uc810 \ub9de\ucd94\uae30 \uc2e4\ud328 \ub4f1\uc73c\ub85c \uc778\ud574 \uc774\ubbf8\uc9c0\uac00 \ud750\ub824\uc9c4 \uacbd\uc6b0 \uc774\ub97c \ubcf4\uc815\\n        - \ubaa8\uc158 \ube14\ub7ec, \uac00\uc6b0\uc2dc\uc548 \ube14\ub7ec \ub4f1\\n    - \uc774\ubbf8\uc9c0 \uc778\ud398\uc778\ud305 : \uc774\ubbf8\uc9c0 \uc77c\ubd80\uac00 \ud6fc\uc190\ub418\uac70\ub098 \uacb0\ud568\uc774 \uc788\ub294 \ubd80\ubd84\uc744 \uc8fc\ubcc0 \uc815\ubcf4\ub97c \uc774\uc6a9\ud574 \ucc44\uc6cc \ub123\ub294 \ubc29\ubc95\\n        - \uc8fc\ub85c \uc608\uc220 \uc791\ud488 \ubcf5\uc6d0, \ubb38\uc11c \uc774\ubbf8\uc9c0 \ubcf5\uc6d0 \ub4f1\uc5d0 \uc0ac\uc6a9\\n    - \uc555\ucd95 \uc190\uc0c1 \ubcf5\uc6d0 : \uc9c0\ub098\uce5c \uc774\ubbf8\uc9c0 \uc555\ucd95\uc73c\ub85c \uc778\ud574 \ubc1c\uc0dd\ud55c \ube14\ub85d \uc544\ud2f0\ud329\ud2b8\ub098 \ud654\uc9c8 \uc190\uc2e4\uc744 \ubcf5\uc6d0\\n        - \uc555\ucd95 \uc54c\uace0\ub9ac\uc998 \ud2b9\uc131\uc744 \ud65c\uc6a9\ud558\uc5ec \uc6d0\ubcf8\uc5d0 \uac00\uae4c\uc6b4 \uc774\ubbf8\uc9c0 \uc7ac\ud604\\n- \ud2b9\uc9d5 \ucd94\ucd9c(Feature Extraction) : \uc774\ubbf8\uc9c0 \ub0b4\uc5d0\uc11c \uc911\uc694\ud55c \uc815\ubcf4 \ub610\ub294 \ud328\ud134\uc744 \ucc3e\uc544\ub0b4\uace0 \uc774\ub97c \ubd84\uc11d\ud560 \uc218 \uc788\ub294 \ud615\ud0dc\ub85c \ubcc0\ud658\ud558\ub294 \uacfc\uc815\\n    - \uc5e3\uc9c0 \ucd94\ucd9c : \uc774\ubbf8\uc9c0\uc758 \uacbd\uacc4 \ubd80\ubd84\uc744 \ucc3e\uc544\ub0b4\ub294 \uae30\ubc95\\n        - \uc18c\ubca8(Sobel), \uce90\ub2c8(Canny),\ub77c\ud50c\ub77c\uc2dc\uc548(Laplacian) \ub4f1\uc758 \uc5e3\uc9c0 \uac80\ucd9c \uc54c\uace0\ub9ac\uc998\\n    - \ucf54\ub108 \ucd94\ucd9c: \uac1d\uccb4\uc758 \ubaa8\uc11c\ub9ac \ub610\ub294 \ucf54\ub108 \ubd80\ubd84\uc744 \ucc3e\uc544\ub0c4\\n        - \ud574\ub9ac\uc2a4 \ucf54\ub108 \uac80\ucd9c\uae30, \uc2dc\ud504\ud2b8, \uc11c\ud504 \ub4f1\uc758 \uc54c\uace0\ub9ac\uc998 \uc0ac\uc6a9\\n    - \ud14d\uc2a4\ucc98 \ud2b9\uc9d5 : \uc774\ubbf8\uc9c0\ub97c \uc774\ub8e8\ub294 \ud45c\uba74\uc758 \ud328\ud134\uc774\ub098 \uc9c8\uac10 \ubd84\uc11d\\n        - \ud68c\uc0c9\uc870 \uacf5\uae30 \ud589\ub82c(GLCM), \ub77c\ud50c\ub77c\uc2dc\uc548 \ud53c\ub77c\ubbf8\ub4dc, \uac00\ubcf4 \ud544\ud130 \ub4f1\\n    - \ubaa8\uc591 \uae30\ubc18 \ud2b9\uc9d5 : \uc774\ubbf8\uc9c0 \ub0b4 \uc874\uc7ac\ud558\ub294 \ubb3c\uccb4\uc758 \uc804\uccb4\uc801\uc778 \ubaa8\uc591 \ud30c\uc545\\n        - \ucee8\ud22c\uc5b4 \uae30\ubc18 \ubd84\uc11d, HOG(Histogram of Oriented Gradients)\\n    - \uc8fc\ud30c\uc218 \uc601\uc5ed \ud2b9\uc9d5 : \uc774\ubbf8\uc9c0\ub97c \uacf5\uac04 \uc601\uc5ed\ub2e8\uc704\uc5d0\uc11c \ubd84\uc11d\ud558\ub294 \ub300\uc2e0, \uc8fc\ud30c\uc218 \uc601\uc5ed\uc5d0\uc11c \ubd84\uc11d\ud558\uc5ec \ud2b9\uc9d5\uc744 \ucd94\ucd9c\\n        - \ud478\ub9ac\uc5d0 \ubcc0\ud658\\n    - \uc0c9\uc0c1 \ud788\uc2a4\ud1a0\uadf8\ub7a8\\n        - \uc774\ubbf8\uc9c0 \ub0b4 \uc0c9\uc0c1 \ubd84\ud3ec \ubd84\uc11d\ud558\uc5ec \ud2b9\uc815 \uac1d\uccb4\ub098 \uc7a5\uba74 \uc778\uc2dd\ud558\ub294\ub370 \uc0ac\uc6a9\\n\\n\ud53d\uc140(Pixel) : \ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0\uc758 \ucd5c\uc18c \ub2e8\uc704\ub85c, \uc0c9\uc0c1 \ub610\ub294 \uba85\uc554 \uac12\uc744 \ub098\ud0c0\ub0b8\ub2e4. \\n\\n\ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0\ub294 \uc720\ud55c\ud55c \ud53d\uc140 \uc9d1\ud569\uc73c\ub85c \uad6c\uc131\ub418\uba70, \uac01 \ud53d\uc140\uc740 \uc0c9\uc0c1\uacfc \uac15\ub3c4\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\ub2e4. \\n\\n[\uc0ac\uacfc \uc774\ubbf8\uc9c0\uc640 \ud53d\uc140 \uac12\uc758 \ud589\ub82c \ud45c\ud604] - \ucd9c\ucc98: OpenAI DALL-E\\n\\n![Apple](image/apple.png)\\n\\n\\n\ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0\uc758 \ucc98\ub9ac \ub2e8\uacc4 \\n\\n1. \uc774\ubbf8\uc9c0 \ud68d\ub4dd(Image acquisition)\\n    - \uce74\uba54\ub77c, \uc2a4\uce90\ub108, \ub610\ub294 \ub2e4\ub978 \uc774\ubbf8\uc9c0 \uc13c\uc11c\ub85c \uc774\ubbf8\uc9c0\ub97c \ucea1\ucc98 \uc7a5\uce58\ub97c \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc9d0\\n    - \ud68d\ub4dd\ud55c \uc774\ubbf8\uc9c0\ub97c \ub514\uc9c0\ud138 \ud615\uc2dd\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ud488\uc9c8\uacfc \ud574\uc0c1\ub3c4\ub97c \ucd5c\ub300\ud55c \ubcf4\uc874\ud558\ub294\uac8c \uc911\uc694\\n2. \uc774\ubbf8\uc9c0 \uac1c\uc120(Image enhancement)\\n    - \uc774\ubbf8\uc9c0 \ud488\uc9c8\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294\ub370 \ucd08\uc810\uc744 \ub9de\ucda4\\n    - \ub178\uc774\uc988 \uc81c\uac70, \uba85\uc554 \uc870\uc808, \uc0c9\uc0c1 \ubcf4\uc815 \ub4f1\uc758 \uc791\uc5c5\uc744 \ud3ec\ud568\\n    - \uc774\ubbf8\uc9c0\ub97c \ub354\uc6b1 \uba85\ud655\ud558\uace0 \uc774\ud574\ud558\uae30 \uc27d\uac8c \ub9cc\ub4dc\ub294 \uac83\uc774 \ubaa9\ud45c\\n        - \uc774\ub97c \uc704\ud574 \ub2e4\uc591\ud55c \ud544\ud130\ub9c1 \uae30\ubc95\uacfc \ud788\uc2a4\ud1a0\uadf8\ub7a8 \ud3c9\ud65c\ud654, \uc0e4\ud504\ub2dd \ub4f1\uc758 \uae30\uc220\uc774 \uc0ac\uc6a9\\n3. \uc774\ubbf8\uc9c0 \ubd84\uc11d(Image analysis)\\n    - \uc774\ubbf8\uc9c0\uc758 \uc720\uc6a9\ud55c \uc815\ubcf4\ub97c \ucd94\ucd9c\\n    - \ud2b9\uc9d5 \ucd94\ucd9c, \ud328\ud134 \uc778\uc2dd, \uac1d\uccb4 \ud0d0\uc9c0 \ub4f1\uc758 \uc791\uc5c5\uc744 \ud3ec\ud568\\n    - \uc774 \ub2e8\uacc4\uc758 \ubaa9\ud45c\ub294 \uc774\ubbf8\uc9c0\uc5d0\uc11c \uc758\ubbf8 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc5bb\ub294 \uac83\\n4. \uc774\ubbf8\uc9c0 \ud574\uc11d \ubc0f \uc774\ud574(Image interpertation and understanding)\\n    - \uc774\ubbf8\uc9c0 \ubd84\uc11d \ub2e8\uacc4\uc758 \uc815\ubcf4\ub97c \ubc14\ud0d5\uc73c\ub85c \uc774\ubbf8\uc9c0\uc758 \uc758\ubbf8\ub97c \uc774\ud574\ud558\uace0 \uacb0\ub860\uc744 \ub3c4\ucd9c\ud558\ub294 \ub2e8\uacc4\\n    - \uc774\ubbf8\uc9c0 \ubd84\ub958, \uc774\ubbf8\uc9c0 \uac80\uc0c9, \uc774\ubbf8\uc9c0 \uc778\uc2dd \ub4f1\uc758 \uc791\uc5c5\uc744 \ud3ec\ud568"},{"id":"/\ucef4\ud4e8\ud130 \ube44\uc804","metadata":{"permalink":"/blog/\ucef4\ud4e8\ud130 \ube44\uc804","editUrl":"https://github.com/asthtls/dokku-website/edit/main/blog/\ucef4\ud4e8\ud130 \ube44\uc804.md","source":"@site/blog/\ucef4\ud4e8\ud130 \ube44\uc804.md","title":"\ucef4\ud4e8\ud130 \ube44\uc804(Computer Vision)","description":"\uc774\ubbf8\uc9c0 \ucc98\ub9ac\uc640 \ucef4\ud4e8\ud130 \ube44\uc804","date":"2024-05-20T00:00:00.000Z","tags":[],"readingTime":3.095,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\ucef4\ud4e8\ud130 \ube44\uc804(Computer Vision)","date":"2024-05-20T00:00:00.000Z","priority":2},"unlisted":false,"prevItem":{"title":"\uc774\ubbf8\uc9c0 \ucc98\ub9ac_Image_Processing","permalink":"/blog/\uc774\ubbf8\uc9c0 \ucc98\ub9ac_Image_Processing"},"nextItem":{"title":"\ube14\ub85c\uadf8","permalink":"/blog/2021/08/26/welcome"}},"content":"\uc774\ubbf8\uc9c0 \ucc98\ub9ac\uc640 \ucef4\ud4e8\ud130 \ube44\uc804 \\n\\n- \uc774\ubbf8\uc9c0 \ucc98\ub9ac\ub294 \uc8fc\ub85c \ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0\uc758 \ud5a5\uc0c1, \ubcc0\ud615, \ubcf5\uc6d0 \ub4f1\uc5d0 \uc911\uc810\\n- \ucef4\ud4e8\ud130 \ube44\uc804\uc740 \uc774\ubbf8\uc9c0 \ucc98\ub9ac\uc5d0\uc11c \uc0dd\uc131\ub41c \uc774\ubbf8\uc9c0\ub97c \ubd84\uc11d\ud558\uace0 \ud574\uc11d\ud558\ub294 \ub370 \ucd08\uc810\uc744 \ub9de\ucda4\\n\\n\ucef4\ud4e8\ud130 \ube44\uc804\uc774\ub780 \\n\\n- \ub514\uc9c0\ud138 \uc774\ubbf8\uc9c0\ub098 \ube44\ub514\uc624\ub97c \ud1b5\ud574 \uc2dc\uac01\uc801 \uc815\ubcf4\ub97c \ud574\uc11d\ud558\uace0 \uc774\ud574\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud559\ubb38 \ubc0f \uae30\uc220 \ubd84\uc57c\\n- \ucef4\ud4e8\ud130 \ube44\uc804\uacfc \uc778\uac04\uc758 \ube44\uc804\uc740 \ube44\uc2b7\ud55c \ubaa9\ud45c\ub97c \uacf5\uc720\ud558\uc9c0\ub9cc \ud504\ub85c\uc138\uc2a4\uc5d0\ub294 \ud070 \ucc28\uc774\uc810\uc774 \uc874\uc7ac\\n- \uc778\uac04\uc740 \uc218\ub144\uac04\uc758 \uc2e0\uacbd \ud6c8\ub828\uacfc \uac1c\ubc1c\uc774 \ud544\uc694\ud55c \uc791\uc5c5\uc778 \ubb3c\uccb4\ub97c \uc27d\uac8c \uc778\uc2dd\ud558\uace0 \uc7a5\uba74\uc758 \uae4a\uc774\ub97c \uc778\uc2dd\ud55c\ub2e4.\\n- \ucef4\ud4e8\ud130 \ube44\uc804 \uc2dc\uc2a4\ud15c\uc740 \ud328\ud134 \uc778\uc2dd\uacfc \ud559\uc2b5 \uae30\ubc95\uc5d0 \uc758\uc874\ud558\uc5ec \uc774\ubbf8\uc9c0\ub97c \ud574\uc11d\ud558\ub294\ub370, \uc774 \uacfc\uc815\uc5d0\ub294 \uad11\ubc94\uc704\ud55c \ucef4\ud4e8\ud305 \ub9ac\uc18c\uc2a4\uc640 \uc815\uad50\ud55c \uc54c\uace0\ub9ac\uc998\uc774 \ud544\uc694\ud558\ub2e4.\\n- \ucef4\ud4e8\ud130 \ube44\uc804\uc758 \ubc94\uc704\ub294 \ub0ae\uc740 \uc218\uc900, \uc911\uac04 \uc218\uc900, \ub192\uc740 \uc218\uc900\uc758 \ube44\uc804 \uc791\uc5c5\uc73c\ub85c \ubd84\ub958 \uac00\ub2a5\\n\\n\ub0ae\uc740 \uc218\uc900\\n\\n- \ub178\uc774\uc988 \uc81c\uac70 : \uc774\ubbf8\uc9c0\uc5d0\uc11c\uc758 \uc6d0\uce58 \uc54a\ub294 \ub178\uc774\uc988 \uc81c\uac70\ud558\uc5ec \ud488\uc9c8 \uac1c\uc120\\n- \ub300\ube44 \ud5a5\uc0c1 : \uc774\ubbf8\uc9c0\uc758 \ub300\ube44\ub97c \ud5a5\uc0c1\uc2dc\ucf1c \ub354 \uc120\uba85\ud558\uac8c \ubcf4\uc774\ub3c4\ub85d \ud558\ub294 \uc791\uc5c5\\n- \ucc44\ub3c4 \ud5a5\uc0c1 : \uc774\ubbf8\uc9c0\uc758 \uc0c9\uc0c1\uc744 \ub354 \uc0dd\ub3d9\uac10 \uc788\uac8c \ubcf4\uc774\ub3c4\ub85d \ucc44\ub3c4\ub97c \ub192\uc774\ub294 \uc791\uc5c5\\n- \uc5d0\uc9c0 \uac80\ucd9c : \uc774\ubbf8\uc9c0\uc5d0\uc11c \uac1d\uccb4\uc758 \uacbd\uacc4\uc120\uc744 \uac80\ucd9c\ud558\ub294 \uc791\uc5c5\\n\\n\uc911\uac04 \uc218\uc900 \\n\\n- \uc774\ubbf8\uc9c0 \uc601\uc5ed \ubd84\ud560 : \uc774\ubbf8\uc9c0\ub97c \uc5ec\ub7ec \uac1c\uc758 \uc758\ubbf8 \uc788\ub294 \uc601\uc5ed\uc73c\ub85c \ub098\ub204\ub294 \uc791\uc5c5\\n- \uc774\ubbf8\uc9c0 \uac1d\uccb4\ub85c \ubd84\ud560 : \uc774\ubbf8\uc9c0 \ub0b4\uc5d0\uc11c \uac1c\ubcc4 \ubd84\ub9ac\ud558\uc5ec \uac01 \uac1d\uccb4\uc5d0 \ub808\uc774\ube14\uc744 \uc9c0\uc815\ud558\ub294 \uc791\uc5c5\\n- \uc774\ubbf8\uc9c0 \uad11\ud559 \ud750\ub984 \ucd94\uc815 : \uc5f0\uc18d\ub41c \uc774\ubbf8\uc9c0 \ud504\ub808\uc784\uc5d0\uc11c \ud53d\uc140\uc758 \uc6c0\uc9c1\uc784\uc744 \ucd94\uc801\ud558\uc5ec \ubb3c\uccb4\uc758 \uc774\ub3d9 \ubc29\ud5a5\uacfc \uc18d\ub3c4 \ucd94\uc815\\n\\n\ub192\uc740 \uc218\uc900 \\n\\n- \uac1d\uccb4 \uc778\uc2dd : \uc774\ubbf8\uc9c0\ub098 \ube44\ub514\uc624\uc5d0\uc11c \ud2b9\uc815 \uac1d\uccb4\ub97c \uc778\uc2dd\ud558\uace0 \uc2dd\ubcc4\ud558\ub294 \uc791\uc5c5\\n- \uc7a5\uba74 \uc7ac\uad6c\uc131 : \uc5ec\ub7ec \uc774\ubbf8\uc9c0\ub098 \ube44\ub514\uc624 \ud504\ub808\uc784\uc744 \uc774\uc6a9\ud558\uc5ec 3D \uc7a5\uba74\uc744 \uc7ac\uad6c\uc131\ud558\ub294 \uc791\uc5c5\\n- \uc774\ubbf8\uc9c0 \ud559\uc2b5 \ubc0f \ucd94\ub860 : \ub300\ub7c9\uc758 \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\ub97c \ud559\uc2b5\ud558\uc5ec \ubaa8\ub378\uc744 \uad6c\ucd95\ud558\uace0, \uc774\ub97c \uc774\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc774\ubbf8\uc9c0\uc5d0 \ub300\ud574 \ucd94\ub860\uc744 \uc218\ud589\ud558\ub294 \uc791\uc5c5"},{"id":"/2021/08/26/welcome","metadata":{"permalink":"/blog/2021/08/26/welcome","editUrl":"https://github.com/asthtls/dokku-website/edit/main/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"\ube14\ub85c\uadf8","description":"","date":"2024-05-10T00:00:00.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\ube14\ub85c\uadf8","date":"2024-05-10T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\ucef4\ud4e8\ud130 \ube44\uc804(Computer Vision)","permalink":"/blog/\ucef4\ud4e8\ud130 \ube44\uc804"}},"content":""}]}}')}}]);