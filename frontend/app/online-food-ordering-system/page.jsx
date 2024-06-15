import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <section className='px-2 md:px-10 py-2 md:py-28 pt-10  foodbg   '>
                <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4  gap-3 md:gap-10">
                    <div className="md:col-span-2 col-span-1 items-center block md:flex flex-wrap mb-5 md:mb-0 text-center md:text-start relative">
                        <h1 className="text-3xl md:text-6xl opacity-95  font-semibold px-4 md:px-0">
                            How   <strong className="text-pink-600">  Food Ordering </strong> Management System Works
                        </h1>
                        <div className="hidden md:block absolutediv absolute right-4 -top-16">
                            <Image width={100} height={100} src="/illustrations/s1.png" alt="call us" />
                        </div>
                        <p className='my-5 text-md md:text-lg'>Are you craving your favorite meal from the comfort of your home but don't want to deal with the hassle of calling in your order? With Food Ordering Management System, ordering your favorite dishes has never been easier. Let's take a closer look at how food ordering works seamlessly on our platform:</p>
                    </div>
                    <div class="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/search-food.png' alt='' className='w-14 h-14 md:w-16 md:h-16' width={80} height={80} class="transition-filter duration-300 ease-in-out" />
                        <h3 class="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800 group-hover:tracking-wider transition-all	"> <strong>Browse the Menu</strong></h3>
                        <p class="leading-6">Start by visiting the Food website or mobile app. <strong>Browse through a wide selection of cuisines,</strong> ranging from local favorites to international delights.</p>
                    </div>

                    <div class="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/select-food-item.png' alt='' className='w-14 h-14 md:w-16 md:h-16' width={80} height={80} />
                        <h3 class="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800 group-hover:tracking-wider transition-all	"> <strong>Select Your Items</strong></h3>
                        <p class="leading-6">Once you've found what you're craving, simply click or tap on the items you want to order. Our intuitive interface allows you to add items to your cart with just a few clicks.</p>
                    </div>

                    <div class="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/Customize-Your-Order.png' alt='' className='w-14 h-14 md:w-16 md:h-16' width={80} height={80} />
                        <h3 class="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800 group-hover:tracking-wider transition-all	"> <strong>Customize Your Order</strong></h3>
                        <p class="leading-6"> Have specific preferences or dietary restrictions? No problem! Food lets you <strong>customize your order to your liking.</strong> Whether you want extra cheese on your pizza or need to hold the onions, we've got you covered.</p>
                    </div>

                    <div class="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/choose-delievery-options.png' alt='' className='w-14 h-14 md:w-16 md:h-16' width={80} height={80} />
                        <h3 class="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800 group-hover:tracking-wider transition-all	"> <strong>Choose Delivery, Pickup Or Takeaway</strong></h3>
                        <p class="leading-6"> Next, select your preferred delivery option. Want your food delivered straight to your doorstep? Opt for our hassle-free delivery service. Prefer to pick up your order on your way home? Choose the pickup option and save time.</p>
                    </div>

                    <div class="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/secure-checkout.png' alt='' className='w-14 h-14 md:w-16 md:h-16' width={80} height={80} />
                        <h3 class="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800 group-hover:tracking-wider transition-all	"> <strong>Secure Checkout</strong></h3>
                        <p class="leading-6">Once you've finalized your order, proceed to checkout. Food offers a secure payment gateway, ensuring your transactions are safe and encrypted.</p>
                    </div>

                    <div class="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/track-food-order.png' alt='' className='w-14 h-14 md:w-16 md:h-16' width={80} height={80} />
                        <h3 class="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800 group-hover:tracking-wider transition-all	"> <strong>Track Your Order</strong></h3>
                        <p class="leading-6"> Sit back and relax while we prepare your delicious meal. With Food, you can <strong>track the status of your order in real-time.</strong> Know exactly when your food will arrive or be ready for pickup.</p>
                    </div>

                    <div class="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/enjoy-your-meal.png' alt='' className='w-14 h-14 md:w-16 md:h-16' width={80} height={80} />
                        <h3 class="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800 group-hover:tracking-wider transition-all	"> <strong>Enjoy Your Meal</strong></h3>
                        <p class="leading-6"> Whether you're dining in with family, hosting a party, or enjoying a quiet night in solo, Food ensures your meal arrives fresh and delicious.</p>
                    </div>

                    <div class="bg-white shadow-md group rounded-lg positivecard positivecardimg p-6 cursor-pointer relative md:col-span-1 lg:col-span-2 xl:col-span-1">
                        <Image src='/icons/rate-and-review-food.png' alt='' className='w-14 h-14 md:w-16 md:h-16' width={80} height={80} />
                        <h3 class="font-semibold text-lg mb-2 mt-3 group-hover:text-amber-800 group-hover:tracking-wider transition-all	"> <strong>Rate and Review</strong></h3>
                        <p class="leading-6">Loved your meal? Share your experience with others by <strong>leaving a rating and review on the Food platform.</strong> Your feedback helps us continuously improve and provide the best service possible.</p>
                    </div>



                </div>
            </section>

        </div>
    )
}

export default page