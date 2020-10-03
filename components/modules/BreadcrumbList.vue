<template>
  <ul class="breadcrumb-list">
		<li itemprop="itemListElement"
			itemscope="itemscope"
			itemtype="https://schema.org/ListItem"
		>
			<a href="/"
			itemprop="item"
			>
				<span itemprop="name">
					ぴゅあらば
				</span>
				<meta itemprop="position"
					content="1"
				/>
			</a>
		</li>
		<li v-for="(page, index) in breadcrumbList"
			:key="index"
			itemprop="itemListElement"
			itemscope="itemscope"
			itemtype="https://schema.org/ListItem"
		>
			<span v-if="page.path === ''"
				itemprop="item"
				class="disabled"
			>
				<span itemprop="name">
					{{ page.name }}
				</span>
				<meta itemprop="position"
					:content="index + 2"
				/>
			</span>
			<a v-else
				:href="page.path"
				itemprop="item"
			>
				<span itemprop="name">
					{{ page.name }}
				</span>
				<meta itemprop="position"
						:content="index + 2"
				/>
			</a>
		</li>
	</ul> 
</template>

<script>
import { mapGetters } from 'vuex'

export default {
 name: 'BreadcrumbList',
 computed: {
  ...mapGetters([ 'breadcrumbList' ])
 },
}
</script>

<style scoped>
.breadcrumb-list {
	line-height: theme('lineHeight.lh12');
	padding: 11px 0;
	@apply absolute top-0 left-0 right-0 flex items-center;
}

.breadcrumb-list li {
	@apply relative px-4 pl-4 mr-8;
}

.breadcrumb-list li::before {
	content: "";
	width: 4px;
	height: 4px;
	right: -4px;
	top: theme('inset.1/2');
	border-color: theme('colors.base');
	transform: rotate(45deg) translateY(-50%);
	@apply absolute block border-t-1 border-r-1;
}

.breadcrumb-list li:first-child {
	@apply pl-0;
}

.breadcrumb-list li:last-child {
	@apply mr-0;
}

.breadcrumb-list li:last-child::before {
	@apply hidden;
}

.breadcrumb-list a {
	color: theme('colors.accent');
	@apply no-underline cursor-pointer;
}

.breadcrumb-list a:hover {
	color: theme('colors.accent');
	@apply underline cursor-pointer;
}

.breadcrumb-list span {
	font-size: theme('fontSize.fz12');
}

.breadcrumb-list span.disabled {
	@apply cursor-auto;
}
</style>