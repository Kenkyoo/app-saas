import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
  Heart
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t px-20">
          <Separator />
          <div className="py-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
          <div className="flex gap-3">
            <h6>Dev by Kenkyo -- with</h6>
            <Heart fill="purple"/>
          </div>   

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>  
      </footer>
    </>  
  );
};

export default Footer;
