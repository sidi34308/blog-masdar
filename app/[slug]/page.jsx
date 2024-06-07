import React from 'react'
import Menu from '../components/menu/Menu'
import Comments from '../components/comments/Comments'

const SinglePage = () => {
    return (
        <div className='flex gap-14 flex-1 '>
            <div className='info flex flex-col gap-10'>
                <h1 className=' text-3xl text-lack'>مدير وكالة التشغيل: نجاحنا في توفير فرص عمل للموريتانيين</h1>
                <img src='/post.png' className=' w-full' />
                <p className='p-4'>أطلق الرئيس الانتقالي في مالي، أسيمي غويتا، يوم السبت، أعمال بناء محطة شمسية جديدة في تيكادوغو-ديالاكورو، في خطوة تهدف إلى تعزيز البنية التحتية للطاقة في البلاد.

                    هذه المحطة هي الثالثة من نوعها بعد محطتي سانانكوروبا وسافو، وتأتي ضمن جهود الحكومة لتعزيز إنتاج الطاقة النظيفة والمستدامة.

                    وستبلغ القدرة الإنتاجية للمحطة الجديدة 100 ميغاواط وستقام على مساحة 120 هكتارًا، ومن المتوقع أن تساهم في خلق حوالي 200 وظيفة سنويًا.

                    وقال غويتا، إن محطة تيكادوغو-ديالاكورو تمثل نهاية المرحلة الأولى من سلسلة بناء المحطات الشمسية في مالي.

                    وستشيد المحطة الجديدة على مساحة 120 هكتارًا، ومن المتوقع أن تساهم في زيادة العرض من الطاقة النظيفة، وتقليل تكاليف الإنتاج، وخلق حوالي 200 وظيفة سنويًا، بحسب السلطات الانتقالية.

                    وتعاني مالي من أزمة طاقة حادة تؤثر على معظم مدنها، إذ تغرق العديد من المناطق في ظلام دامس.

                    ويعود ذلك إلى التدهور الكبير في البنية التحتية لشبكة الكهرباء وزيادة الطلب على الطاقة، مما دفع الحكومة إلى البحث عن حلول مستدامة لتحسين الوضع.
                </p>
                <Comments />
            </div>
            <Menu />

        </div>
    )
}

export default SinglePage