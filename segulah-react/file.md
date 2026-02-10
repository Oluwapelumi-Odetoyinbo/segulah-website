 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <!-- Product Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            <!-- Left: Image Gallery -->
            <div class="space-y-6">
                <div class="relative bg-[#F3F4F1] rounded-2xl overflow-hidden aspect-square group">
                    <!-- Main Image -->
                    <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop" 
                         alt="SilkSkin Serum" 
                         class="w-full h-full object-cover mix-blend-multiply">
                    
                    <!-- Navigation Arrows -->
                    <button class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i data-lucide="chevron-left" class="w-5 h-5 text-gray-600"></i>
                    </button>
                    <button class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i data-lucide="chevron-right" class="w-5 h-5 text-gray-600"></i>
                    </button>
                </div>

                <!-- Thumbnails -->
                <div class="grid grid-cols-4 gap-4">
                    <button class="aspect-square rounded-xl overflow-hidden border-2 border-gray-900 bg-[#F3F4F1]">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover mix-blend-multiply" alt="View 1">
                    </button>
                    <button class="aspect-square rounded-xl overflow-hidden border border-transparent hover:border-gray-300 bg-[#F3F4F1]">
                        <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover mix-blend-multiply" alt="View 2">
                    </button>
                    <button class="aspect-square rounded-xl overflow-hidden border border-transparent hover:border-gray-300 bg-[#F3F4F1]">
                        <img src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover mix-blend-multiply" alt="View 3">
                    </button>
                    <button class="aspect-square rounded-xl overflow-hidden border border-transparent hover:border-gray-300 bg-[#F3F4F1]">
                        <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover mix-blend-multiply" alt="View 4">
                    </button>
                </div>
            </div>

            <!-- Right: Product Info -->
            <div class="flex flex-col">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-gray-500 text-sm font-normal">Skin Care</span>
                </div>

                <div class="flex items-center gap-4 mb-3">
                    <h1 class="text-3xl font-medium tracking-tight text-gray-900">SilkSkin Serum</h1>
                    <span class="px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">In Stock</span>
                </div>

                <!-- Rating -->
                <div class="flex items-center gap-2 mb-6">
                    <div class="flex text-yellow-400">
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    </div>
                    <span class="text-gray-500 text-sm mt-0.5">4.8 (245 Reviews)</span>
                </div>

                <!-- Price -->
                <div class="flex items-baseline gap-3 mb-6">
                    <span class="text-3xl font-medium text-[#C59B50]">$48.00</span>
                    <span class="text-xl text-gray-400 line-through font-light">$80.00</span>
                </div>

                <p class="text-lg text-gray-500 leading-relaxed font-light mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <!-- Variants -->
                <div class="mb-8">
                    <label class="block text-base font-medium text-gray-900 mb-3">Size/Volume</label>
                    <div class="flex flex-wrap gap-3">
                        <button class="px-5 py-2 rounded-full text-sm font-medium bg-[#1B3D2F] text-white transition-colors">
                            30 ml
                        </button>
                        <button class="px-5 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-600 hover:border-gray-300 transition-colors">
                            60ml
                        </button>
                        <button class="px-5 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-600 hover:border-gray-300 transition-colors">
                            80ml
                        </button>
                        <button class="px-5 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-600 hover:border-gray-300 transition-colors">
                            100ml
                        </button>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                    <!-- Counter -->
                    <div class="flex items-center border border-gray-200 rounded-full px-2 h-12">
                        <button class="p-2 text-gray-500 hover:text-gray-700">
                            <i data-lucide="minus" class="w-4 h-4"></i>
                        </button>
                        <input type="number" value="4" class="w-8 text-center text-gray-900 font-medium focus:outline-none bg-transparent">
                        <button class="p-2 text-gray-500 hover:text-gray-700">
                            <i data-lucide="plus" class="w-4 h-4"></i>
                        </button>
                    </div>

                    <!-- Buttons -->
                    <button class="flex-1 bg-[#1B3D2F] text-white h-12 px-8 rounded-full font-medium hover:bg-[#152e24] transition-colors shadow-sm">
                        Add To Cart
                    </button>
                    <button class="flex-1 bg-[#C59B50] text-white h-12 px-8 rounded-full font-medium hover:bg-[#b08a45] transition-colors shadow-sm">
                        Buy Now
                    </button>
                    
                    <!-- Wishlist -->
                    <button class="h-12 w-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-red-500 transition-colors">
                        <i data-lucide="heart" class="w-5 h-5"></i>
                    </button>
                </div>

                <!-- Meta -->
                <div class="space-y-3 text-sm">
                    <div class="flex items-start">
                        <span class="w-20 text-gray-900 font-medium">SKU:</span>
                        <span class="text-gray-500 font-light">GRFR85648HGJ</span>
                    </div>
                    <div class="flex items-start">
                        <span class="w-20 text-gray-900 font-medium">Tags:</span>
                        <span class="text-gray-500 font-light">Skincare, Serums, Vitamin C</span>
                    </div>
                    <div class="flex items-center">
                        <span class="w-20 text-gray-900 font-medium">Share:</span>
                        <div class="flex gap-3">
                            <a href="#" class="text-[#1B3D2F] hover:opacity-80"><div class="w-5 h-5 rounded-full border border-[#1B3D2F] flex items-center justify-center"><i data-lucide="facebook" class="w-3 h-3"></i></div></a>
                            <a href="#" class="text-[#1B3D2F] hover:opacity-80"><div class="w-5 h-5 rounded-full border border-[#1B3D2F] flex items-center justify-center"><i data-lucide="twitter" class="w-3 h-3"></i></div></a>
                            <a href="#" class="text-[#1B3D2F] hover:opacity-80"><div class="w-5 h-5 rounded-full border border-[#1B3D2F] flex items-center justify-center"><i data-lucide="instagram" class="w-3 h-3"></i></div></a>
                            <a href="#" class="text-[#1B3D2F] hover:opacity-80"><div class="w-5 h-5 rounded-full border border-[#1B3D2F] flex items-center justify-center"><i data-lucide="link" class="w-3 h-3"></i></div></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Tabs Navigation -->
        <div class="mt-24 border-b border-gray-100">
            <div class="flex justify-center gap-10">
                <button class="pb-4 text-lg text-gray-400 font-normal hover:text-gray-600 transition-colors">Description</button>
                <button class="pb-4 text-lg text-gray-400 font-normal hover:text-gray-600 transition-colors">Additional Information</button>
                <button class="pb-4 text-lg text-[#1B3D2F] font-medium border-b-2 border-[#1B3D2F]">Review</button>
            </div>
        </div>

        <!-- Reviews Content -->
        <div class="mt-16 max-w-5xl mx-auto">
            
            <!-- Rating Summary -->
            <div class="flex flex-col md:flex-row items-start md:items-center gap-12 mb-16">
                <!-- Score -->
                <div class="shrink-0">
                    <div class="flex items-baseline gap-1">
                        <span class="text-5xl font-medium text-gray-900 tracking-tight">4.8</span>
                        <span class="text-lg text-gray-400">out of 5</span>
                    </div>
                    <div class="flex text-yellow-400 my-2">
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                    </div>
                    <p class="text-gray-500 font-light">(245 Review)</p>
                </div>

                <!-- Progress Bars -->
                <div class="flex-1 w-full space-y-3">
                    <div class="flex items-center gap-4">
                        <span class="text-sm font-medium w-12 text-gray-500">5 Star</span>
                        <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 w-[80%] rounded-full"></div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-sm font-medium w-12 text-gray-500">4 Star</span>
                        <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 w-[35%] rounded-full"></div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-sm font-medium w-12 text-gray-500">3 Star</span>
                        <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 w-[15%] rounded-full"></div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-sm font-medium w-12 text-gray-500">2 Star</span>
                        <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 w-[8%] rounded-full"></div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-sm font-medium w-12 text-gray-500">1 Star</span>
                        <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 w-[2%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Review List Header -->
            <div class="flex items-center justify-between mb-8">
                <div>
                    <h3 class="text-xl font-medium text-gray-900">Review List</h3>
                    <p class="text-gray-500 text-sm mt-1 font-light">Showing 1-4 of 24 results</p>
                </div>
                <div class="relative">
                    <button class="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50">
                        <span class="text-gray-400">Sort by :</span>
                        <span class="font-medium text-gray-900">Newest</span>
                        <i data-lucide="chevron-down" class="w-4 h-4 ml-1"></i>
                    </button>
                </div>
            </div>

            <!-- Single Review Item -->
            <div class="border-t border-gray-100 py-10">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center gap-4">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Avatar" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-base font-medium text-gray-900 flex items-center gap-2">
                                Kristin Watson 
                                <span class="text-green-600 text-[10px] bg-green-50 px-1.5 py-0.5 rounded border border-green-100 font-medium">Verified</span>
                            </h4>
                            <!-- Mobile-only date if needed, but usually on right -->
                        </div>
                    </div>
                    <span class="text-sm text-gray-400 font-light">1 month ago</span>
                </div>

                <div class="pl-0 md:pl-16">
                    <h5 class="text-lg font-medium text-gray-900 mb-2">Absolutely love this product!</h5>
                    <p class="text-lg text-gray-500 leading-relaxed font-light mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    
                    <div class="flex items-center gap-2 mb-6">
                        <div class="flex text-yellow-400">
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                            <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        </div>
                        <span class="text-sm font-medium text-gray-900">5.0</span>
                    </div>

                    <!-- Review Images -->
                    <div class="flex gap-4">
                        <div class="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 relative group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=300&auto=format&fit=crop" class="w-full h-full object-cover" alt="Review Image">
                            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <i data-lucide="zoom-in" class="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </div>
                        </div>
                        <div class="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1556228720-19de7529fa2c?q=80&w=300&auto=format&fit=crop" class="w-full h-full object-cover" alt="Review Image">
                        </div>
                        <div class="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                            <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=300&auto=format&fit=crop" class="w-full h-full object-cover" alt="Review Image">
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
