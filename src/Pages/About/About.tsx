import { Container } from "@/Components/Container/Container";
import Header from "@/Components/Header/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

export default function About() {
   return (
      <Container>
         <Header />
         <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">درباره ما</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               ما یک تیم متعهد به ارائه بهترین خدمات و محصولات هستیم. هدف ما
               ایجاد تجربه‌ای بهتر برای مشتریان با استفاده از تکنولوژی‌های نوین
               و طراحی مدرن است.
            </p>
         </div>

         <div className="grid gap-6 md:grid-cols-2">
            <Card>
               <CardHeader>
                  <CardTitle>امیرمحمد خاکسار</CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="text-sm text-muted-foreground">
                     بنیان‌گذار و توسعه‌دهنده اصلی. عاشق برنامه‌نویسی، طراحی
                     رابط کاربری، و ایجاد تجربه‌های دیجیتال قدرتمند.
                  </p>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle> ماهان رضایی</CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="text-sm text-muted-foreground">
                     طراح گرافیک و متخصص تجربه کاربری. خلاق و علاقه‌مند به
                     جزئیات بصری و زیبایی طراحی.
                  </p>
               </CardContent>
            </Card>
         </div>
      </Container>
   );
}
